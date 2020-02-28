const { Router } = require('express');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const router = new Router();

router.post(
  '/login',
  [check('username').isEmail(), check('password').isLength({ min: 6 })],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }

      const { username, password } = req.body;

      const user = await User.findOne({ username });

      if (!user) {
        return res.status(400).json({ message: 'Пользователь не найден' });
      }

      if (password !== user.password) {
        return res.status(400).json({ message: 'Неверный пароль' });
      }

      const token = jwt.sign({ userID: user.id }, config.get('secretJwt'), {
        expiresIn: '1h'
      });

      res.json({ token, userID: user.id });
    } catch (e) {
      res.status(500).json({ message: 'Что то пошло не так' });
    }
  }
);

module.exports = router;
