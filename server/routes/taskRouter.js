let express = require('express');
const pool = require('../data/config');
const {response} = require("express");

taskRouter = express.Router({mergeParams: true});

taskRouter.get('/', (req, res) => {
    pool.query('SELECT * FROM tasks;', (error, result) => {
        if (error) throw error;

        res.render('list/tasks', {
            title: 'Задания',
            tasks: result
        });
    });
});

taskRouter.get('/types/list', (req, res) => {
    pool.query('SELECT * FROM task_type;', (error, result) => {
        if (error) throw error;

        res.render('list/task_types', {
            title: 'Типы заданий',
            task_types: result
        });
    });
});

taskRouter.get('/:task/edit', async (req, res, next) => {
    let taskTypes;
    taskTypes =  await pool.promise().query('SELECT * FROM task_type;').then( ([rows,fields]) => rows);


    const result = await pool.promise().query('SELECT * FROM tasks WHERE id=' + req.params["task"] + ';').then( ([rows,fields]) => rows);

    res.render('edit/editTask', {
        title: 'Редактирование задания',
        task: result[0],
        allTaskTypes: taskTypes
    });
});
taskRouter.post('/:task/edit', (req, res) => {
    if (!req.body) {
        return res.sendStatus(400);
    }
    console.log(req.body);
    pool.query(
        'UPDATE tasks SET\n' +
        'performers_id = ' + req.body.performers_id + ', \n' +
        'title = \'' + req.body.title + '\', \n' +
        'decription = \'' + req.body.description + '\',\n' +
        'price = ' + req.body.price + ',\n' +
        'tags = \'' + req.body.tags + '\', \n' +
        'task_type_id = ' + req.body.task_type + '\n' +
        //'status_id = 2\n' +
        'WHERE id=' + req.params['task'] + ';',
        (err) => {
            if (err) console.log(err);
            res.redirect('/tasks');
        }
    );
});

module.exports = taskRouter;
