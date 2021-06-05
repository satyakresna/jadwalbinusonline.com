const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });
var api_key = process.env.MG_SENDER_MAIL_API_KEY;
var DOMAIN = process.env.MG_DOMAIN;
var mailgun = require('mailgun-js')({apiKey: api_key, domain: DOMAIN});

module.exports.send = function (newSchedule) {
    var data = {
        from: 'Info Jadwal Binus Online <no-reply@jadwalbinusonline.com>',
        to: 'register_announcement@mg.jadwalbinusonline.com',
        subject: 'Jadwal Terbaru Pendaftaran Binus Online Learning (Jakarta)',
        template: 'register-announcement',
        'v:batas_pendaftaran': newSchedule.batas_pendaftaran,
        'v:tpks': newSchedule.tpks,
        'v:pengumuman_tpks': newSchedule.pengumuman_tpks,
        'v:orientasi': newSchedule.orientasi,
        'v:kuliah_perdana': newSchedule.kuliah_perdana
    };
    
    mailgun.messages().send(data, function (error, body) {
        console.log(body);
    });
}