var expect = require('expect.js');
const Add = require('../math.js');
const add = new Add();
describe('test suite', function () {
    it('should do math', function () {
    expect(add.add(1, 3)).to.equal(5);
  });
});
