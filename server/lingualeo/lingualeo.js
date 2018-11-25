const request = require('superagent');

const LOGIN_URL = 'http://api.lingualeo.com/api/login';
const GET_TRANSLATES_URL = 'http://api.lingualeo.com/gettranslates';
const GET_WORD_URL = 'http://lingualeo.com/userdict3/getWord';
const ADD_WORD_URL = 'http://api.lingualeo.com/addword';
// const ADD_WORD_URL = 'http://lingualeo.com/userdict3/addWord';
const ADD_WORD_SET = 'http://lingualeo.com/userdict3/createWordSet';

const agent = request.agent();

const login = (email, password) =>
  agent
    .get(LOGIN_URL)
    .query({email, password});

// const getTranslates = word =>
//   agent
//     .get(GET_TRANSLATES_URL)
//     .query({
//       word,
//     })
//     .then(res => {
//       return res.body.translate
//     });

const getWord = (word, dictionaryId) =>
  agent
    .get(GET_WORD_URL)
    .query({
      'word_value': word,
      'groupId': dictionaryId,
      '_': +new Date()
    });


const addWord = (cookie) =>
  agent.get(ADD_WORD_URL).set('Cookie', cookie).query({
    word: 'new',
    tword: encodeURIComponent('новый'),
    context: '',
  });


const addWord1 = (wordId, dictionaryId, sourceWord, translatedWord, cookie) => {

  // 'word_id': wordId,
  // 'speech_part_id': 0,
  // 'groupId': dictionaryId,
  // 'user_word_value': sourceWord,
  // 'translate_value': translatedWord

  return agent
    .get(ADD_WORD_URL)
    .set('Cookie', cookie)
    .query({
      word_id: 27109,
      speech_part_id: 0,
      groupId: 11034,
      translate_value: encodeURIComponent('новый'),
      user_word_value: 'new',
    })


  // return agent
  //   .get(ADD_WORD_URL)
  //   .set('Cookie', cookie)
  //   .query({
  //     word_id: 27109,
  //     speech_part_id: 0,
  //     groupId: 11034,
  //     translate_value: 'новый',
  //     user_word_value: 'new',
  //   })
};

const translate = (word, sourceLang = 'en', targetLang = 'ru') =>
  agent
    .get(
      `https://lingualeo.com/translate.php?q=${encodeURIComponent(
        word,
      )}&from=&source=${sourceLang}&target=${targetLang}`,
    )
    .then(res => {
      return res.body.translation;
    });

const addWordSet = (title, cookie) => {
  return agent
    .post(ADD_WORD_SET)
    .set('Cookie', cookie)
    .query({'wordSet[name]': title});
};

module.exports = {
  login,
  // getTranslates,
  translate,
  addWord,
  getWord,
  addWordSet,
};
