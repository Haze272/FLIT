let express = require('express');
const pool = require('../data/config');
const {response} = require("express");

ranksRouter = express.Router({mergeParams: true});

ranksRouter.get('/customers', (req, res) => {
    pool.query('SELECT * FROM ranks_customer;', (error, result) => {
        if (error) throw error;

        res.render('list/ranks', {
            title: 'Ранги заказчиков',
            ranks: result,
            type: 'customers'
        });
    });
});

ranksRouter.get('/performers', (req, res) => {

    pool.query('SELECT * FROM ranks_performer;', (error, result) => {
        if (error) throw error;

        res.render('list/ranks', {
            title: 'Ранги исполнителей',
            ranks: result,
            type: 'performers'
        });
    });
});

ranksRouter.get('/:rank/edit', async (req, res, next) => {
    let result;
    if (req.query.type == 'customers') {ranks = await pool.promise().query('SELECT * FROM ranks_customer;').then( ([rows,fields]) => rows);
        result = await pool.promise().query('SELECT * FROM ranks_customer WHERE id=' + req.params["rank"] + ';').then( ([rows,fields]) => rows);
    } else if (req.query.type == 'performers') {
        result = await pool.promise().query('SELECT * FROM ranks_performer WHERE id=' + req.params["rank"] + ';').then( ([rows,fields]) => rows);
    }
    res.render('edit/editRank', {
        title: 'Редактирование ранга',
        rank: result[0],
        type: req.query.type
    });
});
ranksRouter.post('/:rank/edit', (req, res) => {
    if (!req.body) {
        return res.sendStatus(400);
    }

    let sql;
    if (req.query.type == 'customers') {
        sql = 'UPDATE ranks_customer SET\n' +
            'name = \'' + req.body.name + '\',\n' +
            'description = \'' + req.body.description + '\',\n' +
            'exp_required = \'' + req.body.exp_required + '\'\n' +
            'WHERE id=' + req.params["rank"] + ';';
    } else if (req.query.type == 'performers') {
        sql = 'UPDATE ranks_performer SET\n' +
            'name = \'' + req.body.name + '\',\n' +
            'description = \'' + req.body.description + '\',\n' +
            'exp_required = \'' + req.body.exp_required + '\'\n' +
            'WHERE id=' + req.params["rank"] + ';';
    }

    pool.query(
        sql,
        (err) => {
            if (err) console.log(err);
            if (req.query.type == 'customers') {
                res.redirect('/ranks/customers');
            } else if (req.query.type == 'performers') {
                res.redirect('/ranks/performers');
            }
        }
    );
});

module.exports = ranksRouter;
