// require('dotenv').config();
const path = require('path');
const fs = require('fs');

let result = '';
const search = '</head>';
// const GA_TRACKER_ID = process.env.GA_TRACKER_ID;
const str = `<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-S023R4K9E6"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-S023R4K9E6');
</script>`;

var readStream = fs.createReadStream(path.join(__dirname, 'frontend', 'index.html'), 'utf8');

readStream.on('data', function (chunk) {
    var index, start, end;
    index = chunk.indexOf(search);
    if (index > -1) {
        start = chunk.substr(0, index);
        end = chunk.substr(index);
        result += start + str + end;
        // if (GA_TRACKER_ID !== undefined) {
            
        // } else {
        //     result += chunk;
        // }
    } else {
        result += chunk;
    }
}).on('end', function () {
    console.log(result);
    const writeStream = fs.createWriteStream(path.join(__dirname, 'frontend', 'index.html'));
    writeStream.write(result);
})