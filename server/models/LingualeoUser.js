const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lingualeoUserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  cookie: {
    type: String
  }
});

module.exports = mongoose.model('lingualeoUser', lingualeoUserSchema);
