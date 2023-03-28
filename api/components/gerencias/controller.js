const bcrypt = require('bcrypt');
const nanoid = require('nanoid');
const auth = require('../auth');
const TABLA = 'gerencias';

module.exports = function(injectedStore){
    let store = injectedStore;

    if(!store){
        store = require('../../../store/myqsl');  
    }

    function list(){
        return store.list(TABLA);
    }


    async function insert(body){

        const gerencia = {
            CodigoGerencia: nanoid(),
            nombre        : body.nombre,
            created_at    : new Date(),
            updated_at    : new Date(),
        }

        return store.insert(TABLA,gerencia);
    }

    async function update(body){

        const gerencia = {
            nombre        : body.nombre,
            updated_at    : new Date(),
        }

        return store.update(TABLA,gerencia);
    }
    
    return{
        list,
        insert,
        update,
    };
}