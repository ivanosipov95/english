const express = require('express');
const bcript = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../models/User');
const config = require('../config/config');
const router = express.Router();

const login = async (req, res) => {
  const candidate = await User.findOne({email: req.body.email});

  if (!candidate) {
    return res.status(404).json({
      message: 'user with this email does not find'
    })
  }

  const isPasswordEqual = bcript.compareSync(req.body.password, candidate.password);

  if (isPasswordEqual) {

    const token = jwt.sign({
      email: candidate.email,
      userId: candidate._id,
    }, config.jwt, {expiresIn: 60 * 60});

    res.status(200).json({
      token: `Bearer ${token}`
    })
  } else {
    res.status(401).json({
      message: 'incorrect password'
    })
  }
};

const register = async (req, res) => {
  const candidate = await User.findOne({email: req.body.email});

  if (candidate) {
    return res.status(409).json({
      message: 'try to use another email'
    })
  }


  const salt = bcript.genSaltSync(10);
  const pass = req.body.password;

  const user = new User({
    email: req.body.email,
    password: bcript.hashSync(pass, salt),
  });

  try {
    await user.save();

    res.status(201).json(user);
  } catch (e) {
    res.status(500);
  }
};

router.post('/auth/sing-card', login);
router.post('/auth/register', register);
router.get('/auth/test', passport.authenticate('jwt', {session: false}), (req, res) =>  res.status(200).json({}));


module.exports = router;
