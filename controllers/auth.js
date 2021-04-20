const { response } = require('express'); // recuperar el intellisense
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const createUser = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        ok: false,
        msg: 'Existing user email',
      });
    }

    user = new User(req.body);

    // Encriptar contraseña
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    await user.save();

    // Generar JWT

    res.status(201).json({
      ok: true,
      id: user.id,
      name: user.name,
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      msg: 'Please be in contact with the administrator',
    });
  }
};

const userLogin = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        ok: false,
        msg: 'User does not exist with that email',
      });
    }

    // Confirmar los passwords
    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: 'Incorrect password',
      });
    }

    // Generar nuestro JWT
    res.json({
      ok: true,
      uid: user.id,
      name: user.name,
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      msg: 'Please be in contact with the administrator',
    });
  }
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
