const express = require('express');
const router = express.Router();

const login = (req, res) => {
  res.status(200).json({
    login: {
      body: req.body
    }
  })
};

const register = (req, res) => {

};

router.post('/auth/login', login);
router.post('/auth/register', register);


module.exports = router;
