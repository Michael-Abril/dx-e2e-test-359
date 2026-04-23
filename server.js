const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({status: 'ok', message: 'VAR-359 regression test', ts: Date.now(), host: process.env.HOST, hostname: process.env.HOSTNAME});
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Listening on 0.0.0.0:${PORT}`);
});
