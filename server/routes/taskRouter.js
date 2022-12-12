let express = require('express');
const pool = require('../data/config');
const {response} = require("express");

taskRouter = express.Router({mergeParams: true});

taskRouter.get('/', (req, res) => {
    pool.query('SELECT * FROM tasks;', (error, result) => {
        if (error) throw error;

        res.render('list/tasks', {
            title: 'Просмотр и редактирование заданий',
            tasks: result
        });
    });
});

taskRouter.get('/:task/edit', (req, res, next) => {
    let taskTypes;
    pool.query('SELECT * FROM task_type;', (error, result) => {
        if (error) throw error;

        taskTypes = result;
    });


    pool.query('SELECT * FROM tasks WHERE id=' + req.params["task"] + ';', (error, result) => {
        if (error) throw error;


        res.render('edit/editTask', {
            title: 'Редактирование задания',
            task: result[0],
            allTaskTypes: taskTypes
        });
    });
});

module.exports = taskRouter;
