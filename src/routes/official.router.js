const express = require('express');
const router = express.Router();
const officialController = require('../controllers/official.controller');

router
    .post('/getByIdNumber', officialController.getByIdNumber)
    .get("/", (req, res) => {
        const htmlResponse = `
          <html>
            <head>
              <title>NodeJs y Express en Vercel</title>
            </head>
            <body>
              <h1>Soy un proyecto Back end en vercel</h1>
            </body>
          </html>
        `;
        res.send(htmlResponse);
      });

module.exports = router;