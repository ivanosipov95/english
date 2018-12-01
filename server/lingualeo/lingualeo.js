const request = require('superagent');

const LOGIN_URL = 'http://api.lingualeo.com/api/login';
const ADD_WORD_URL = 'http://api.lingualeo.com/addword';
const ADD_WORD_SET = 'http://lingualeo.com/userdict3/createWordSet';

const agent = request.agent();

const login = (email, password) =>
  agent
    .get(LOGIN_URL)
    .query({email, password});


const addWord = (sourceWord, translatedWord, cookie) =>
  agent.get(ADD_WORD_URL)
    .set('Cookie', cookie)
    .query({
    word: sourceWord,
    tword: translatedWord,
    context: '',
  });


const addWordSet = (title, cookie) => {
  return agent
    .post(ADD_WORD_SET)
    .set('Cookie', cookie)
    .query({'wordSet[name]': title});
};

module.exports = {
  login,
  addWord,
  addWordSet,
};
