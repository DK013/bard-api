const bard = require('../src/');
require('dotenv').config()

const _bard = new bard(process.env.BARD_TOKEN);

test('Check type of answer', async () => {
    const answer = await bard.getAnswer('What is Google Bard?');
    expect(typeof answer).toBe('string');
});