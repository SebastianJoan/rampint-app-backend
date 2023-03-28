const bcrypt = require('bcrypt');
const nanoid = require('nanoid');
const auth = require('../auth');
const TABLA = 'equipos';

module.exports = function(injectedStore){
    let store = injectedStore;

    if(!store){
        store = require('../../../store/myqsl');  
    }

    function list(){
        return store.list(TABLA);
    }

    async function insert(body){

        const equipo = {
            codigoequipo    : nanoid(),
            CodigoGerencia  : body.CodigoGerencia,
            nombre          : body.nombre,
            modelo          : body.modelo,
            referencia      : body.referencia,
            placas          : body.placas,
            capacidad       : body.capacidad,
            created_at      : new Date(),
            updated_at      : new Date(),
        }

        return store.insert(TABLA,equipo);
    }

    async function update(body){

        const equipo = {
            CodigoGerencia  : body.CodigoGerencia,
            nombre          : body.nombre,
            modelo          : body.modelo,
            referencia      : body.referencia,
            placas          : body.placas,
            capacidad       : body.capacidad,
            updated_at      : new Date(),
        }

        return store.update(TABLA,equipo);
    }
    
    return{
        list,
        insert,
        update,
    };
}