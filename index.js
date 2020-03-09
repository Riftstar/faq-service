const express = require('express');
const port = 8080;
const service = express();

const faq = require('./faqs');

service.get('/faq', (req, res) => {
    return res.json(faq);
});

service.get('/faq/:number', (req, res) => {
    const count = req.params
    return res.json(count);
});

console.log(`Server listening on ${port}`);
service.listen(port);