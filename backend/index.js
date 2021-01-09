const app = require('express')();
const fsPromises = require('fs').promises;
const { join } = require('path');
const file = join(__dirname, '..', 'data', 'schedules.json');

app.get('/api/last_schedule', async(req, res) => {
    const text = await fsPromises.readFile(file, 'utf8');
    const schedules = JSON.parse(text);
    return res.status(200).send(schedules[schedules.length - 1]);
});

module.exports = app;

