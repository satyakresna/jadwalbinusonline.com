const getSchedule = require('./scraper/schedule.js');

(async () => {
    const result = await getSchedule();

    // TODO: Store result to file
    // Array of objects
    console.log(result);
})();