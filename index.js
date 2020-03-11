const express = require('express');
const port = 8080;
const service = express();

const faq = require('./faqs');

service.get('/faqs/', (req, res) => {
    if (req.query.q) {
        let word = req.query.q
        console.log(word);
        let patt = new RegExp(word, 'i');
        let filter = faq.filter(function (found) {
            return found.question.match(patt);
        });
        return res.json(filter);
    }
    return res.json(faq);
});

console.log(`Server listening on ${port}`);
service.listen(port);