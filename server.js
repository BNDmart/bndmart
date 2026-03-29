const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/api/order', (req, res) => {
  console.log('Order received:', req.body);
  res.status(200).json({ success: true, message: 'Order placed (email disabled).' });
});

app.post('/api/contact', (req, res) => {
  console.log('Contact message:', req.body);
  res.status(200).json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
