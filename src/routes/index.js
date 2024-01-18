const express = require('express');
const officialRouter = require('./official.router');
const cors = require('cors')

const routerApi = (app) => {
    const router = express.Router();
    app.use(cors());
    app.use('/siathfake', router);
    router.use('/official', officialRouter);
}

module.exports = routerApi;