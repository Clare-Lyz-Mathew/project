
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { ChevronDown } from 'lucide-react';

interface Quote {
  id: number;
  text: string;
  type: string;
  x: number;
  y: number;
}

const CELEBRATORY_QUOTES = [
  { type: 'Weddings', text: "Love’s sweet beginning." },
  { type: 'Birthdays', text: "Another year of wonderful you." },
  { type: 'Anniversaries', text: "A legacy of devotion." },
  { type: 'Reunions', text: "Where memories meet again." }
];

const CelebratoryHero3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeQuotes, setActiveQuotes] = useState<Quote[]>([]);
  const rotationSpeedRef = useRef(0.005);
  const isHoveringRef = useRef(false);

  useEffect(() => {
    if (!mountRef.current) return;

    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 3, 8);
    camera.lookAt(0, 1.5, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // --- Lighting ---
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.5);
    keyLight.position.set(5, 10, 5);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x7d7e83, 1);
    rimLight.position.set(-5, 5, -5);
    scene.add(rimLight);

    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    // --- Materials ---
    const cakeMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, shininess: 30 });
    
    // Procedural Lace Pattern
    const createLaceTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 512;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, 512, 512);
        ctx.strokeStyle = '#7d7e83';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 10]);
        for (let i = 0; i < 512; i += 40) {
          ctx.beginPath();
          ctx.arc(i, 256, 20, 0, Math.PI * 2);
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(256, i, 20, 0, Math.PI * 2);
          ctx.stroke();
        }
      }
      const texture = new THREE.CanvasTexture(canvas);
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(4, 1);
      return texture;
    };
    cakeMaterial.map = createLaceTexture();

    const pedestalMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xe0e0e0,
      roughness: 0.1,
      metalness: 0.2
    });

    // --- Pedestal ---
    const pedestalGeo = new THREE.CylinderGeometry(1.5, 1.6, 0.4, 64);
    const pedestal = new THREE.Mesh(pedestalGeo, pedestalMaterial);
    pedestal.position.y = -0.2;
    scene.add(pedestal);

    // --- Cake ---
    const cakeGroup = new THREE.Group();
    
    // Tier 1 (Bottom)
    const tier1 = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 1, 64), cakeMaterial);
    tier1.position.y = 0.5;
    cakeGroup.add(tier1);

    // Tier 2 (Middle)
    const tier2 = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.9, 0.8, 64), cakeMaterial);
    tier2.position.y = 1.4;
    cakeGroup.add(tier2);

    // Tier 3 (Top)
    const tier3 = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 0.6, 64), cakeMaterial);
    tier3.position.y = 2.1;
    cakeGroup.add(tier3);

    scene.add(cakeGroup);

    // --- Bokeh Particles ---
    const particlesCount = 100;
    const particlesGeo = new THREE.BufferGeometry();
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 15;
    }
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0x7d7e83,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(particlesGeo, particlesMaterial);
    scene.add(particles);

    // --- Animation Loop ---
    const animate = () => {
      requestAnimationFrame(animate);
      
      const targetSpeed = isHoveringRef.current ? 0.001 : 0.005;
      rotationSpeedRef.current += (targetSpeed - rotationSpeedRef.current) * 0.05;
      
      cakeGroup.rotation.y += rotationSpeedRef.current;
      pedestal.rotation.y += rotationSpeedRef.current;
      particles.rotation.y += 0.001;
      
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // --- Quote Manager ---
    const quoteInterval = setInterval(() => {
      const quote = CELEBRATORY_QUOTES[Math.floor(Math.random() * CELEBRATORY_QUOTES.length)];
      const newQuote: Quote = {
        id: Date.now(),
        ...quote,
        x: 30 + Math.random() * 40, // 30% to 70% range
        y: 20 + Math.random() * 40
      };
      setActiveQuotes(prev => [...prev, newQuote]);
      setTimeout(() => {
        setActiveQuotes(prev => prev.filter(q => q.id !== newQuote.id));
      }, 4000);
    }, 2500);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(quoteInterval);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-charcoal to-slate"
      onMouseEnter={() => isHoveringRef.current = true}
      onMouseLeave={() => isHoveringRef.current = false}
    >
      <div ref={mountRef} className="absolute inset-0 z-0" />
      
      {/* Floating Quotes Layer */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {activeQuotes.map(quote => (
          <div 
            key={quote.id}
            className="absolute animate-pop-up flex flex-col items-center"
            style={{ left: `${quote.x}%`, top: `${quote.y}%` }}
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-full shadow-xl">
              <p className="font-serif text-[#3a3f47] text-lg md:text-2xl italic text-glow whitespace-nowrap">
                {quote.text}
              </p>
              <p className="text-[10px] tracking-[0.3em] uppercase text-platinum/80 text-center mt-2 font-bold">
                {quote.type}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll Down Hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/50 z-20 pointer-events-none">
        <span className="text-[10px] tracking-[0.5em] uppercase font-bold">Scroll to Explore</span>
        <ChevronDown className="w-6 h-6 animate-bounce-slow" />
      </div>
    </div>
  );
};

export default CelebratoryHero3D;
