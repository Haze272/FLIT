let express = require('express');
let router = express.Router();
const pool = require('../data/config');
const {response} = require("express");

taskRouter = express.Router({mergeParams: true});

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
router.use('/tasks', taskRouter);

taskRouter.get('/', (req, res) => {
  pool.query('SELECT * FROM tasks;', (error, result) => {
    if (error) throw error;

    res.render('tasks', {
      title: 'Просмотр и редактирование заданий',
      tasks: result
    });
  });
});

taskRouter.get('/:task/edit', (req, res, next) => {
  pool.query('SELECT * FROM tasks WHERE id=' + req.params["task"] + ';', (error, result) => {
    if (error) throw error;

    res.render('editTask', {
      title: 'Редактирование задания',
      task: result[0]
    });
  });
});

module.exports = router;
