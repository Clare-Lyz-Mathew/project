import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { User, MapPin, Lock, Package, LogOut, CheckCircle2 } from "lucide-react";

const DashboardPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");
  const [userEmail, setUserEmail] = useState("");
  const [isGuest, setIsGuest] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Form states
  const [address, setAddress] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    const isGuestUser = localStorage.getItem("guest_user") === "true";
    setIsGuest(isGuestUser);
    
    if (isGuestUser) {
      setUserEmail("guest@elyzaevents.com");
      const savedAddress = localStorage.getItem("guest_address");
      if (savedAddress) setAddress(savedAddress);
    } else if (auth.currentUser) {
      setUserEmail(auth.currentUser.email || "user@example.com");
    }
  }, []);

  const handleLogout = async () => {
    try {
      if (isGuest) {
        localStorage.removeItem("guest_user");
      } else {
        await signOut(auth);
      }
      navigate("/");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  const handleUpdateAddress = (e) => {
    e.preventDefault();
    if (isGuest) {
      localStorage.setItem("guest_address", address);
    }
    setSuccessMessage("Address updated successfully!");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Implement actual Firebase password update here if needed.
    // For now, simulating success.
    setSuccessMessage("Password updated successfully!");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  // Mock Orders Data
  const mockOrders = [
    {
      id: "ELZ-8829",
      type: "Event Booking",
      name: "Grand Wedding Reception",
      date: "Oct 15, 2026",
      status: "Confirmed",
      amount: "$12,500"
    },
    {
      id: "ELZ-9102",
      type: "Add-On Service",
      name: "Premium Floral Arrangement",
      date: "Nov 02, 2026",
      status: "Processing",
      amount: "$850"
    }
  ];

  return (
    <div className="min-h-screen bg-mist pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-6xl animate-fade-in">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar */}
          <div className="w-full md:w-1/4">
            <div className="glass rounded-soft p-6 shadow-soft sticky top-28">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-navy text-mist flex items-center justify-center">
                  <User size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-navy">My Account</h3>
                  <p className="text-xs text-navy/60 truncate w-32 md:w-40">{userEmail}</p>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => setActiveTab("profile")}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-refined transition-all ${activeTab === "profile" ? "bg-navy text-mist" : "text-navy hover:bg-white/50"}`}
                >
                  <MapPin size={18} />
                  <span className="font-medium text-sm">Address & Profile</span>
                </button>
                <button
                  onClick={() => setActiveTab("security")}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-refined transition-all ${activeTab === "security" ? "bg-navy text-mist" : "text-navy hover:bg-white/50"}`}
                >
                  <Lock size={18} />
                  <span className="font-medium text-sm">Security</span>
                </button>
                <button
                  onClick={() => setActiveTab("orders")}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-refined transition-all ${activeTab === "orders" ? "bg-navy text-mist" : "text-navy hover:bg-white/50"}`}
                >
                  <Package size={18} />
                  <span className="font-medium text-sm">My Orders</span>
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-navy/10">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-refined transition-all"
                >
                  <LogOut size={18} />
                  <span className="font-medium text-sm">Sign Out</span>
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full md:w-3/4">
            <div className="glass rounded-soft p-8 shadow-soft min-h-[500px]">
              
              {successMessage && (
                <div className="mb-6 bg-green-50 text-green-700 px-4 py-3 rounded-refined flex items-center space-x-2 border border-green-100 animate-slide-up">
                  <CheckCircle2 size={18} />
                  <span>{successMessage}</span>
                </div>
              )}

              {/* Profile Tab */}
              {activeTab === "profile" && (
                <div className="animate-fade-in">
                  <h2 className="text-3xl font-serif text-navy mb-6">Address Details</h2>
                  <form onSubmit={handleUpdateAddress} className="space-y-6 max-w-xl">
                    <div className="space-y-2">
                      <label className="text-sm font-bold tracking-widest text-navy/80">BILLING ADDRESS</label>
                      <textarea
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        rows="4"
                        placeholder="Enter your full address"
                        className="w-full bg-white/50 border border-navy/20 rounded-refined px-4 py-3 text-navy focus:border-navy focus:bg-white transition-all outline-none resize-none"
                      ></textarea>
                    </div>
                    <button type="submit" className="px-8 py-3 bg-navy text-mist rounded-refined font-medium hover:bg-navy/90 transition-all shadow-soft">
                      Save Changes
                    </button>
                  </form>
                </div>
              )}

              {/* Security Tab */}
              {activeTab === "security" && (
                <div className="animate-fade-in">
                  <h2 className="text-3xl font-serif text-navy mb-6">Change Password</h2>
                  <form onSubmit={handleUpdatePassword} className="space-y-6 max-w-xl">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-bold tracking-widest text-navy/80">CURRENT PASSWORD</label>
                        <input
                          type="password"
                          value={currentPassword}
                          onChange={(e) => setCurrentPassword(e.target.value)}
                          required
                          className="w-full bg-white/50 border border-navy/20 rounded-refined px-4 py-3 text-navy focus:border-navy focus:bg-white transition-all outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold tracking-widest text-navy/80">NEW PASSWORD</label>
                        <input
                          type="password"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          required
                          className="w-full bg-white/50 border border-navy/20 rounded-refined px-4 py-3 text-navy focus:border-navy focus:bg-white transition-all outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold tracking-widest text-navy/80">CONFIRM NEW PASSWORD</label>
                        <input
                          type="password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required
                          className="w-full bg-white/50 border border-navy/20 rounded-refined px-4 py-3 text-navy focus:border-navy focus:bg-white transition-all outline-none"
                        />
                      </div>
                    </div>
                    <button type="submit" className="px-8 py-3 bg-navy text-mist rounded-refined font-medium hover:bg-navy/90 transition-all shadow-soft">
                      Update Password
                    </button>
                  </form>
                </div>
              )}

              {/* Orders Tab */}
              {activeTab === "orders" && (
                <div className="animate-fade-in">
                  <h2 className="text-3xl font-serif text-navy mb-6">Order History</h2>
                  
                  <div className="space-y-4">
                    {mockOrders.map((order) => (
                      <div key={order.id} className="bg-white/60 border border-navy/10 rounded-soft p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/80 transition-all shadow-sm">
                        <div>
                          <div className="flex items-center space-x-3 mb-1">
                            <span className="text-sm font-bold text-navy/60">{order.id}</span>
                            <span className={`text-xs px-2 py-1 rounded-full ${order.status === "Confirmed" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}>
                              {order.status}
                            </span>
                          </div>
                          <h4 className="font-serif text-xl font-bold text-navy">{order.name}</h4>
                          <p className="text-sm text-navy/60">{order.type} • {order.date}</p>
                        </div>
                        <div className="flex items-center justify-between md:flex-col md:items-end gap-2">
                          <span className="text-lg font-bold text-navy">{order.amount}</span>
                          <button className="text-sm text-plum font-bold hover:text-navy transition-colors">
                            View Details
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
