const nanoid = require('nanoid');
const TABLA = 'proveedores';

module.exports = function(injectedStore){
    let store = injectedStore;

    if(!store){
        store = require('../../../store/myqsl');  
    }

    function list(){
        return store.list(TABLA);
    }

    async function insert(body){

        const proveedor = {
            codigoProveedor : nanoid(),
            nombre          : body.nombre,
            created_at      : new Date(),
            updated_at      : new Date(),
        }

        return store.insert(TABLA,proveedor);
    }

    async function update(body){

        const proveedor = {
            nombre          : body.nombre,
            updated_at      : new Date(),
        }

        return store.update(TABLA,proveedor);
    }
    
    return{
        list,
        insert,
        update,
    };
}