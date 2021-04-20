const { response } = require('express'); // recuperar el intellisense
const User = require('../models/User');

const createUser = async (req, res = response) => {
  // const { name, email, password } = req.body;

  try {
    const user = new User(req.body);

    await user.save();

    res.status(201).json({
      ok: true,
      msg: 'register',
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'Please be in contact with the administrator',
    });
  }
};

const userLogin = (req, res = response) => {
  const { email, password } = req.body;

  res.json({
    ok: true,
    msg: 'login',
    email,
    password,
  });
};

const revalidateToken = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'renew',
  });
};

module.exports = {
  createUser,
  userLogin,
  revalidateToken,
};
