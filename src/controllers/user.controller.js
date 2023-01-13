const User = require('../models/User.model');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' });
};
//login user
const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.login(username, password);
    // create jwt token
    const token = createToken(user._id);
    const { isDev, userRole } = user;
    res.status(200).json({ username, token, isDev, userRole });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

//signup user
const signupUser = async (req, res) => {
  const { username, password, isDev, userRole } = req.body;
  try {
    const user = await User.signup(username, password, isDev, userRole);
    // create jwt token
    const token = createToken(user._id);
    res.status(200).json({ username, token });
  } catch (error) {
    res.json({ error: error.message });
  }
};

//get all Managers
const getUsersByRole = async (req, res) => {
  const { role } = req.body;
  if (!role) {
    const users = await User.find();
    return res.status(200).json({ users });
  }
  try {
    const users = await User.find({ userRole: role });
    if(users==""){
      return res.json("There are no users with this role")
    }
    return res.status(200).json({ users });
  } catch (error) {
    res.status(400).json({ error: "Sorry, I couldn't fetch users and their roles." });
  }
};

module.exports = { signupUser, loginUser, getUsersByRole };
