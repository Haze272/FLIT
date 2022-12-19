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
            users: result,
            type: 'customers'
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
            users: result,
            type: 'performers'
        });
    });
});


userRouter.get('/:user/edit', async (req, res, next) => {
    let ranks, result, userRank;
    if (req.query.type == 'customers') {
        ranks = await pool.promise().query('SELECT * FROM ranks_customer;').then( ([rows,fields]) => rows);
        result = await pool.promise().query('SELECT * FROM customers WHERE id=' + req.params["user"] + ';').then( ([rows,fields]) => rows);
        userRank = await pool.promise().query('SELECT * FROM ranks_customer WHERE id=' + result[0].ranks_customer_id + ';').then( ([rows,fields]) => rows);
    } else if (req.query.type == 'performers') {
        ranks = await pool.promise().query('SELECT * FROM ranks_performer;').then( ([rows,fields]) => rows);
        result = await pool.promise().query('SELECT * FROM performers WHERE id=' + req.params["user"] + ';').then( ([rows,fields]) => rows);
        userRank = await pool.promise().query('SELECT * FROM ranks_performer WHERE id=' + result[0].ranks_performer_id + ';').then( ([rows,fields]) => rows);
    }
    res.render('edit/editUser', {
        title: 'Пользователь',
        user: result[0],
        userRank: userRank[0].name,
        ranks: ranks
    });
});
userRouter.post('/:user/edit', (req, res) => {
    if (!req.body) {
        return res.sendStatus(400);
    }

    let sql;
    if (req.query.type == 'customers') {
       sql = 'UPDATE customers SET\n' +
           'name = \'' + req.body.name + '\', \n' +
           'surname = \'' + req.body.surname + '\', \n' +
           'exp = \'' + req.body.exp + '\', \n' +
           'email = \'' + req.body.email + '\', \n' +
           'password = \'' + req.body.password + '\', \n' +
           'bio = \'' + req.body.bio + '\'\n' +
           'WHERE id=' + req.params['user'] + ';';
    } else if (req.query.type == 'performers') {
        sql = 'UPDATE performers SET\n' +
            'name = \'' + req.body.name + '\', \n' +
            'surname = \'' + req.body.surname + '\', \n' +
            'exp = \'' + req.body.exp + '\', \n' +
            'email = \'' + req.body.email + '\', \n' +
            'password = \'' + req.body.password + '\', \n' +
            'bio = \'' + req.body.bio + '\'\n' +
            'WHERE id=' + req.params['user'] + ';';
    }

    pool.query(
        sql,
        (err) => {
            if (err) console.log(err);
            if (req.query.type == 'customers') {
                res.redirect('/users/customers');
            } else if (req.query.type == 'performers') {
                res.redirect('/users/performers');
            }
        }
    );
});

module.exports = userRouter;
