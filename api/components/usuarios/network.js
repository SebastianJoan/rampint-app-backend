const express = require('express');

const secure = require('./secure');
const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();

// Routes
router.get('/',secure('list'), list)
router.get('/:id',secure('get'), get);
router.post('/', secure('insert'),insert);

// Internal functions
function list(req, res, next) {
    Controller.list()
        .then((lista) => {
            response.success(req, res, lista, 200);
        })
        .catch(next);
}

function get(req, res, next) {
    Controller.get(req.params.id)
        .then((user) => {
            response.success(req, res, user, 200);
        })
        .catch(next);
}

function insert(req, res, next) {
    Controller.insert(req.body)
        .then((user) => {
            response.success(req, res, user, 201);
        })
        .catch(next);
}

module.exports = router;