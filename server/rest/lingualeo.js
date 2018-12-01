const express = require('express');
const router = express.Router();
const LingualeoUser = require('../models/LingualeoUser');

const lingualeoApi = require('../lingualeo/lingualeo');
const {email, password} = require('../config/config');

const login = async (req, res) => {
  const candidate = await LingualeoUser.findOne({email: 'test'});

  if (!candidate) {
    return res.status(404).json({
      message: 'user with this email does not find'
    })
  }

  if (candidate.cookie) {
    return res.status(200).json({
      message: 'user has already logged in'
    })
  }

  try {
    const resp = await lingualeoApi.login(email, password);
    const cookie = resp.headers['set-cookie'].map(row => row.split(';')[0]).join('; ');

    const user = new LingualeoUser({
      email: 'test',
      password: 'test',
      cookie: cookie
    });

    await user.save();
    return res.status(201).json(user);

  } catch (e) {
    return res.status(500).json(e);
  }
};


const addWord = async (req, res) => {
  try {
    const candidate = await LingualeoUser.findOne({email: 'test'});
    const resp = await lingualeoApi.addWord(req.body.sourceWord, req.body.translatedWord, candidate.cookie);

    return res.status(200).json(resp.body)
  } catch (e) {
    return res.status(500).json(e)
  }
};
const addWordSet = async (req, res) => {
  try {
    const candidate = await LingualeoUser.findOne({email: 'test'});

    const resp = await lingualeoApi.addWordSet(req.body.name, candidate.cookie);
    const wordset = resp.body.result;

    return res.status(200).json(wordset)

  } catch (e) {
    return res.status(500).json(e);
  }
};

router.post('/lingualeo/login', login);
router.post('/lingualeo/word-set', addWordSet);
router.post('/lingualeo/add-word', addWord);

module.exports = router;
