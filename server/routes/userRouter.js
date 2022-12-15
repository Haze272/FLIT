let express = require('express');
const pool = require('../data/config');
const {response} = require("express");

userRouter = express.Router({mergeParams: true});

userRouter.get('/customers', (req, res) => {
    pool.query('SELECT\n' +
        'customers.id,\n' +
        'customers.name,\n' +
        'customers.surname,\n' +
        'customers.exp,\n' +
        'customers.email,\n' +
        'customers.password,\n' +
        'customers.bio,\n' +
        'ranks_customer.name as rank_name,\n' +
        'ranks_customer.id as rank_id,\n' +
        'customers.created_at,\n' +
        'customers.updated_at,\n' +
        'customers.avatar_url,\n' +
        'customers.date_of_birth\n' +
        'FROM customers\n' +
        'JOIN ranks_customer ON\n' +
        'customers.ranks_customer_id=ranks_customer.id\n' +
        'GROUP BY customers.id;\n', (error, result) => {
        if (error) throw error;

        res.render('list/users', {
            title: 'Заказчики',
            users: result
        });
    });
});

userRouter.get('/performers', (req, res) => {

    pool.query('SELECT\n' +
        'performers.id,\n' +
        'performers.name,\n' +
        'performers.surname,\n' +
        'performers.exp,\n' +
        'performers.email,\n' +
        'performers.password,\n' +
        'performers.bio,\n' +
        'ranks_performer.name as rank_name,\n' +
        'ranks_performer.id as ranks_id,\n' +
        'performers.created_at,\n' +
        'performers.updated_at,\n' +
        'performers.avatar_url,\n' +
        'performers.date_of_birth\n' +
        'FROM performers\n' +
        'JOIN ranks_performer ON\n' +
        'performers.ranks_performer_id=ranks_performer.id\n' +
        'GROUP BY performers.id;', (error, result) => {
        if (error) throw error;

        res.render('list/users', {
            title: 'Исполнители',
            users: result
        });
    });
});

// TODO
userRouter.get('/:users/edit', (req, res, next) => {
    let taskTypes;
    pool.query('SELECT * FROM task_type;', (error, result) => {
        if (error) throw error;

        taskTypes = result;
    });


    pool.query('SELECT * FROM tasks WHERE id=' + req.params["task"] + ';', (error, result) => {
        if (error) throw error;


        res.render('edit/editUser', {
            title: 'Редактирование задания',
            task: result[0],
            allTaskTypes: taskTypes
        });
    });
});

module.exports = userRouter;
