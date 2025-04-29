const express = require('express');
const app = express();
const port = 3001;

app.get('/metrics', (req, res) => {
  res.json([
    { name: 'CTR', users: 50, value: Math.random() * 100 },
    { name: 'SAR', users: 250, value: Math.random() * 100 },
    { name: 'Patrons', users: 2500, value: Math.random() * 100 },
    { name: 'Transactions', users: 105, value: Math.random() * 100 },
    { name: 'Purge', users: 1000, value: Math.random() * 100 },
    { name: 'Incidents', users: 51, value: Math.random() * 100 },

  ]);
});

app.listen(port, () => {
  console.log(`Metrics server running on http://localhost:${port}`);
});
