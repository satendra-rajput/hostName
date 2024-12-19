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

app.listen(3000, () => console.log('Server running on port 3000'));
