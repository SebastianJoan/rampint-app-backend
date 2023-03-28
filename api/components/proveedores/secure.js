const auth = require('../../../auth');

module.exports = function checkAuth(action) {
    function middleware(req, res, next) {
        const owner = req.body.id;
        switch(action) {
            case 'insert':                
                auth.check.own(req, owner);
                next();
                break;
            
            case 'update':
                auth.check.own(req, owner);
                next();
                break;
                
            case 'delete':
                auth.check.own(req, owner);
                next();
                break;

            default:
                next();
        }
    }

    return middleware;
}