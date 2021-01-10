const path = require('path');
const fs = require('fs');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
const api_key = process.env.MAILGUN_PRIVATE_KEY;
const DOMAIN = process.env.MAILGUN_DOMAIN;
const mailgun = require('mailgun-js')({ apiKey: api_key, domain: DOMAIN });

const data = fs.readFileSync(path.join(__dirname, 'simple-announcement.html'), {
    encoding: 'utf-8',
    flag: 'r'
});

mailgun.post(`/${DOMAIN}/templates`,
    {
        "template": data,
        "name": "register-announcement",
        "description": "Template for registration announcement from Binus Online Learning (Jakarta)"
    },
    function (error, body) {
        console.log(body);
    }
);