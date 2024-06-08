// routes/auth.js
const express = require('express');
const { OAuth2Client } = require('google-auth-library');
const User = require('../models/User');

const router = express.Router();
const client = new OAuth2Client('1096973741225-8l112dpubr2a0fncn0l4n3louo70s05f.apps.googleusercontent.com');

router.post('/google', async (req, res) => {
  const { tokenId } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: tokenId,
      audience: 'YOUR_GOOGLE_CLIENT_ID',
    });

    const payload = ticket.getPayload();
    const { sub, name, email } = payload;

    let user = await User.findOne({ googleId: sub });
    if (!user) {
      user = new User({
        googleId: sub,
        name,
        email,
      });
      await user.save();
    }

    // You can generate a JWT or session here if you want to manage authentication
    res.status(200).json(user);
  } catch (error) {
    console.error('Error verifying token', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
