const nanoid = require('nanoid');
const TABLA = 'servicios';

module.exports = function(injectedStore){
    let store = injectedStore;

    if(!store){
        store = require('../../../store/myqsl');  
    }

    function list(){
        return store.list(TABLA);
    }

    async function insert(body){

        const servicio = {
            codigoServicio  : nanoid(),
            CodigoGerencia  : body.CodigoGerencia,
            nombre          : body.nombre,
            descripcion     : body.descripcion,
            created_at      : new Date(),
            updated_at      : new Date()
        }

        return store.insert(TABLA,servicio);
    }

    async function update(body){

        const servicios = {
            CodigoGerencia  : body.CodigoGerencia,
            nombre          : body.nombre,
            descripcion     : body.descripcion,
            updated_at      : new Date()
        }

        return store.update(TABLA,servicios);
    }
    
    return{
        list,
        insert,
        update,
    };
}