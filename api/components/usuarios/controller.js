const nanoid = require('nanoid');
const auth = require('../auth');

const TABLA = 'users';

module.exports = function (injectedStore) {
    
    let store = injectedStore;

    if (!store) {
        store = require('../../../store/mysql');
    }

    function list() {
        return store.list(TABLA);
    }

    function get(id) {
        return store.get(TABLA, id);
    }

    async function insert(body) {

        const users = {
            id         : nanoid(),
            name       : body.name, 
            email      : body.email,
            lastname   : body.lastname
        }

        if (body.password || body.email) {
            await auth.insert({
                id         : users.id,
                email      : users.email,
                password   : body.password,
            })
        }

        return store.insert(TABLA, users);
    }

    return {
        list,
        get,
        insert,
    };
}