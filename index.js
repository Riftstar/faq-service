const express = require('express');
const port = 8080;
const service = express();
const cors = require('cors');

service.use(cors());

const faq = require('./faqs');

service.get('/faqs/', (req, res) => {
    if (req.query.q) {
        let word = new RegExp(req.query.q, 'i');
        let filter = faq.filter(function (found) {
            return found.question.match(word);
        });
        return res.json(filter);
    }
    return res.json(faq);
});

console.log(`Server listening on ${port}`);
service.listen(port);