const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to DevEx SecurePay API');
});

// Define payment gateway integration routes
app.post('/payments', (req, res) => {
  // Handle payment processing here
  res.status(501).send('Payment processing not implemented yet');
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: 'Something went wrong!' });
});

// 404 Handler
app.use((req, res, next) => {
  res.status(404).send({ error: 'Not Found' });
});

app.listen(port, () => {
  console.log(`DevEx SecurePay API is running on port ${port}`);
});