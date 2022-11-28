let express = require('express');
let router = express.Router();
const pool = require('../data/config');

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

router.get('/tasks', (request, response) => {
  pool.query('SELECT * FROM tasks', (error, result) => {
    if (error) throw error;

    response.render('tasks', {
      title: 'Просмотр и редактирование заданий',
      tasks: result
    });
  });
});

module.exports = router;
