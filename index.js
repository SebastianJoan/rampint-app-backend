const express      = require('express');
const cors         = require('cors');
const bodyParser   = require('body-parser');
const swaggerUi    = require('swagger-ui-express');
const config       = require('./config');
const equipos      = require('./api/components/equipos/network');
const gerencias    = require('./api/components/gerencias/network');
const proveedores  = require('./api/components/proveedores/network');
const servicios    = require('./api/components/servicios/network');
const usuarios     = require('./api/components/usuarios/network');
const auth         = require('./api/components/auth/network');
const errors       = require('./network/errors');

const app = express();

app.use(bodyParser.json());
app.use(cors({origin:'*'}));

const swaggerDoc = require('./api/swagger.json');

// ROUTER

app.use('/api/equipos',equipos);
app.use('/api/gerencias',gerencias);
app.use('/api/proveedores',proveedores);
app.use('/api/servicios',servicios);
app.use('/api/usuarios',usuarios);
app.use('/api/auth',auth);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use(errors);

app.listen(config.api.port, () => {
    console.log('Api escuchando en el puerto', config.api.port);
});