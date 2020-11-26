const puppeteer = require('puppeteer');

module.exports = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://onlinelearning.binus.ac.id/jadwal-pendaftaran-jakarta/');

    const data = await page.evaluate(() => {
        var content = document.querySelector('div#inside-post-wrapper > div:nth-child(4)');
        var table = content.querySelector('table');
        var rows = Array.from(table.querySelectorAll('tr'));
        var batas_pendaftaran, tkps, pengumuman_tkps, orientasi, kuliah_perdana;
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            var column = row.querySelectorAll('td')[1];
            switch (i) {
                case 0:
                    batas_pendaftaran = column.innerText;
                    break;
                case 1:
                    tkps = column.innerText;
                    break;
                case 2:
                    pengumuman_tkps = column.innerText;
                    break;
                case 3:
                    orientasi = column.innerText;
                    break;
                case 4:
                    kuliah_perdana = column.innerText;
                    break;
            }
        }

        return {
            batas_pendaftaran,
            tkps,
            pengumuman_tkps,
            orientasi,
            kuliah_perdana
        }
    });
    await browser.close();
    return data;
};