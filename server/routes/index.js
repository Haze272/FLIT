let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'FLIT - Управление сервисом' });
});

module.exports = router;
