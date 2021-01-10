const express = require('express');
const app = express();
const fsPromises = require('fs').promises;
const { join } = require('path');
const file = join(__dirname, '..', 'data', 'schedules.json');
const api_key = process.env.MG_PRIVATE_KEY;
const DOMAIN = process.env.MG_DOMAIN;
const mailgun = require('mailgun-js')({ apiKey: api_key, domain: DOMAIN });

app.use(express.urlencoded({
    extended: true
}))

app.get('/api/last_schedule', async(req, res) => {
    const text = await fsPromises.readFile(file, 'utf8');
    const schedules = JSON.parse(text);
    return res.status(200).send(schedules[schedules.length - 1]);
});

app.post('/api/subscribe', (req, res) => {
    if (req.body.name === '' && req.body.email === '') {
        return res.status(422).send({
            message: "Nama dan email wajib diisi!"
        });
    } else if (req.body.name === '') {
        return res.status(422).send({
            message: "Nama wajib diisi!"
        });
    } else if (req.body.email === '') {
        return res.status(422).send({
            message: "Email wajib diisi!"
        });
    } else {
        var list = mailgun.lists(`register_announcement@${DOMAIN}`);

        var user = {
            subscribed: true,
            address: req.body.email,
            name: req.body.name,
        };

        list.members().create(user, function (error, data) {
            if (data.hasOwnProperty('member')) {
                return res.status(200).send({
                    message: "Terima kasih telah berlangganan. Pesan masuk akan muncul bila ada jadwal terbaru.",
                    name: req.body.name,
                    email: req.body.email
                });
            } else {
                return res.status(409).send({
                    message: data.message
                });
            }
        });
    }
});

module.exports = app;

