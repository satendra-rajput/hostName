const express = require('express');
const os = require('os');
const app = express();

app.get('/api/os-info', (req, res) => {
    const userIP = req.ip || req.connection.remoteAddress; // User's IP address
    const osInfo = {
        platform: os.platform(),
        release: os.release(),
        arch: os.arch(),
        hostname: os.hostname(),
        totalMemory: os.totalmem(),
        freeMemory: os.freemem(),
        userIP: userIP // Add user IP to the response
    };
    res.json(osInfo);
});

app.get('/ip', (req, res) => {
  const forwardedIps = req.headers['x-forwarded-for'];
  const ip = forwardedIps ? forwardedIps.split(',')[0] : req.connection.remoteAddress;
  res.send(`Your IP address is: ${ip}`);
});

app.listen(3000, () => console.log('Server running on port 3000'));
