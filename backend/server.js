const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const jwt = require('jsonwebtoken');
const User = require('./models/User');
dotenv.config();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors()); // Enable cross-origin requests

// Routes
app.use('/api/auth', authRoutes);

// Profile Route (GET /profile)
app.get('/profile', async (req, res) => {
    try {
      const token = req.header('Authorization').replace('Bearer ', '');
      if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
      }
  
      // Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decoded)
      const user = await User.findById(decoded.user.id).select('-password');  // Don't send the password field
      if (!user) {
        console.log("user")
        return res.status(400).json({ msg: 'User not found' });
      }
  
      res.json({ user });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  });
// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
