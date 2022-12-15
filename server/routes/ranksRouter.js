let express = require('express');
const pool = require('../data/config');
const {response} = require("express");

ranksRouter = express.Router({mergeParams: true});

ranksRouter.get('/customers', (req, res) => {
    pool.query('SELECT * FROM ranks_customer;', (error, result) => {
        if (error) throw error;

        res.render('list/ranks', {
            title: 'Ранги заказчиков',
            ranks: result
        });
    });
});

ranksRouter.get('/performers', (req, res) => {

    pool.query('SELECT * FROM ranks_performer;', (error, result) => {
        if (error) throw error;

        res.render('list/ranks', {
            title: 'Ранги исполнителей',
            ranks: result
        });
    });
});

ranksRouter.get('/:rank/edit', (req, res, next) => {
    let taskTypes;
    pool.query('SELECT * FROM task_type;', (error, result) => {
        if (error) throw error;

        taskTypes = result;
    });


    pool.query('SELECT * FROM tasks WHERE id=' + req.params["task"] + ';', (error, result) => {
        if (error) throw error;


        res.render('editTask', {
            title: 'Редактирование задания',
            task: result[0],
            allTaskTypes: taskTypes,
            currentTaskType: taskTypes[result[0].task_type_id]
        });
    });
});

module.exports = ranksRouter;
