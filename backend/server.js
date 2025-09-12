const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const transactionsRoute = require('./routes/transactions');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/transactions', transactionsRoute);

// Connect MongoDB
mongoose.connect('mongodb://localhost:27017/finance-tracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
