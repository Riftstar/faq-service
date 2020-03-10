const express = require('express');
const port = 8080;
const service = express();

const faq = require('./faqs');

service.get('/faqs/', (req, res) => {
    if (req.query.q) {
        let word = req.query.q
        let filter = faq.filter(function (found) {
            return found.question.includes(word);
        });
        return res.json(filter);
    }
    return res.json(faq);
});

console.log(`Server listening on ${port}`);
service.listen(port);