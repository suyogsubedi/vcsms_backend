const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isDev: {
    type: Boolean,
    default: false,
  },
  userRole: {
    type: String,
    default: 'user',
  },
});

// static signup method
userSchema.statics.signup = async function (
  username,
  password,
  isDev,
  userRole,
) {
  //validation
  if (!username || !password) {
    throw Error('Username and password cannot be empty');
  }
  const exists = await this.findOne({ username });
  if (exists) {
    throw Error('Username taken');
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  //   userSchema.create
  const user = await this.create({ username, password: hash, isDev, userRole });
  return user;
};

// static login method
userSchema.statics.login = async function (username, password) {
  if (!username || !password) {
    throw Error('Username and password cannot be empty');
  }

  const user = await this.findOne({ username });
  if (user===null) {
    throw Error('Incorrect Username');
  }

  const match = await bcrypt.compare(password,user.password)
  if(!match){
    throw Error("Incorrect Password")
  }
  return user;
};
module.exports = mongoose.model('User', userSchema);
