const auth = require('../../../auth');
const TABLA = 'auth';
const bcrypt = require('bcrypt');

module.exports = function (injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/dummy');
    }

    async function login(usuario,password) {
        const data = await store.query(TABLA, {usuario:usuario});
        return bcrypt.compare(password, data.password).then(
            sonIguales => {
                if( sonIguales === true ){
                    return auth.sign(data); 
                }else{
                    throw new Error('Informacion Invalida');
                }
            }
        )
        
    }

    async function insert(data) {
        
        const authData = {
            id       : data.id,
            email    : data.email,
            password : bcrypt.hash(data.password, 5)
        }

        return store.insert(TABLA, authData);
    }

    return {
        insert,
        login
    };
};