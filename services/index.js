const pkgDir = require('pkg-dir');
const { join } = require('path');
const fs = require('fs');
const fsPromises = fs.promises;
const getSchedule = require('./scraper.js');

(async () => {
    try {
        const newSchedule = await getSchedule();
        const rootDir = await pkgDir(__dirname);
        const outputFile = join(rootDir, 'data', 'schedules.json');
        const text = await fsPromises.readFile(outputFile, 'utf8');
        // Jika isi teks kosong maka ini adalah sebuah inputan baru.
        if (text === "") {
            let newSchedules = [];
            newSchedules.push(newSchedule);
            console.log(newSchedules);
            fs.writeFile(outputFile, JSON.stringify(newSchedules), err => {
                if (err) {
                    console.log(err);
                }

                console.log('Jadwal baru berhasil disimpan');
            });
        } else {
            // Ambil object paling akhir di dalam array
            // Bandingkan object paling akhir itu dengan object yang diambil dari scraper
            // Gunakan key "batas_pendaftaran" sebagai pembanding satu sama lain.
            let schedules = JSON.parse(text);
            const lastSchedule = schedules[schedules.length - 1];
            if (lastSchedule.batas_pendaftaran !== newSchedule.batas_pendaftaran) {
                schedules.push(newSchedule);
                console.log(schedules);
                fs.writeFile(outputFile, JSON.stringify(schedules), err => {
                    if (err) {
                        console.log(err);
                    }
    
                    console.log('Jadwal baru berhasil disimpan');
                });
                // TODO: gunakan newSchedule untuk kirim pesan via email
            } else {
                console.log("Tidak ada jadwal baru");
            }
        }
    } catch (error) {
        console.log(error);
    } 
})();