const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Register Route (POST /register)
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      // Check if the user already exists
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }
  
      // Create a new user (store password as plain text)
      user = new User({ name, email, password });
      console.log(user)
      // Save user to the database
      await user.save();
  
      // Send success response
      res.status(201).json({ msg: 'User registered successfully', user: { name, email } });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  });
  
// Login Route (POST /login)
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
      // Check if the user exists
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: 'Invalid credentials' });
      }
  
      const isMatch = bcrypt.compareSync(password, user.password);

      // Compare the entered password with the stored plaintext password
      if (!isMatch) {
        console.log(user.password, password)
        return res.status(400).json({ msg: 'Invalid credentials' });
      }
  
      // Generate JWT token (for authenticated users)
      const payload = {
        user: {
          id: user.id,
          name: user.name,
        },
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
      console.log(token)
      res.json({ token, msg: 'Login successful', user: { name: user.name, email: user.email } });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  });
  
  

module.exports = router;
