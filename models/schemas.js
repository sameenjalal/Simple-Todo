var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var userSchema = new Schema({
  'username': String,
  'password': String,
  'pic': String,
  'info': String,
  'timestamp': Date
});