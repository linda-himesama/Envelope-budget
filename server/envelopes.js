const express = require('express');
const envelopesRouter = express.Router();
const bodyParser = require('body-parser');
envelopesRouter.use(bodyParser.json());


module.exports = envelopesRouter;