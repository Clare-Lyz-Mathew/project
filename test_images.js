const https = require('https');

const imageIds = [
  "1519741497674-611481863552", // Wedding
  "1511285560929-80b456fea0bc", // Wedding alt
  "1519225421980-a72c1c9b3acf", // Broken Wedding?
  "1517457373958-b7bdd4587205", // Anniversary
  "1511795409834-ef04bbd61622", // Anniversary alt
  "1470252649378-9c29740c9fa8", // Memorial
  "1494522855154-9297ac14b55f", // Memorial alt
  "1496337589254-2c13fa8e1008", // Broken Memorial
  "1556910103-1c02745aae4d", // Catering
  "1414235077428-9711611e58c7", // Catering alt
  "1555939594-58d7cb561b1e", // Broken Catering?
  "1519167130459-3ccdf290b3a3", // Decor
  "1516455590571-18256e5bb41f", // Decor alt
  "1516035069371-29a1b244cc32", // Photo
  "1464366400600-71fbce92ec84", // Party
  "1544427920-c49ccfab8fa7", // Baptism
  "1478146896981-d80c3eb1bc75"  // Lasers
];

async function checkUrl(id) {
  return new Promise((resolve) => {
    https.get(`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=100`, (res) => {
      resolve({ id, status: res.statusCode });
    }).on('error', (e) => resolve({ id, status: 'error', msg: e.message }));
  });
}

async function run() {
  for (const id of imageIds) {
    const result = await checkUrl(id);
    console.log(`${id}: ${result.status}`);
  }
}

run();
