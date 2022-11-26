let express = require('express');
let router = express.Router();

const requiredAuth = (req, res, next) => {
  if (res.locals.currentUser.isGuest()) {
    return next(new AccessDeniedError());
  }
  next();
};

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'FLIT - Управление сервисом' });
});

module.exports = router;
