const bard = require('./src/');
require('dotenv').config()

const _bard = new bard(process.env.BARD_TOKEN);

(async () => {
    var answer = await _bard.getAnswer('What is Google Bard?');
    console.log(answer);
})();