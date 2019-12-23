const express = require('express');
const router = express.Router();

const nav = [
  { id: 0, url: '/o-kompanii', name: 'О компании' },
  { id: 1, url: '/proekty', name: 'Проекты' },
  { id: 2, url: '/proektirovanie', name: 'Проектирование' },
  { id: 3, url: '/stroitelstvo', name: 'Строительство' },
  { id: 4, url: '/shop', name: 'Магазин' },
  { id: 5, url: '/kontakty', name: 'Контакты' }
];

//const getNav = ;

router.get('/api/v1.0/', (req, res) => {
  res.send('Hello api');
});
router.get('/api/v1.0/navs', (req, res) => {
  res.send(nav);
});

module.exports = router;
