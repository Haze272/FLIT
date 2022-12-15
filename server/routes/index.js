let express = require('express');
let router = express.Router();
const pool = require('../data/config');
const {response} = require("express");

taskRouter = require('./taskRouter');
userRouter = require('./userRouter');
ranksRouter = require('./ranksRouter');

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
router.use('/users', userRouter);
router.use('/ranks', ranksRouter);

module.exports = router;
