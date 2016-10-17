import should from 'should';

describe('the utils library', () => {
  let utils;

  beforeEach(() => {
    utils = require('../../../app/lib/utils');
  });

  it('should exist', () => {
    should.exist(utils);
  });

  describe('leadingZero', () => {
    it('should work when passed a number less than 10', () => {
      const expected = '04';
      const actual = utils.leadingZero(4);

      should(expected).equal(actual);
    });

    it('should work when passed a number greater than 10', () => {
      const expected = '12';
      const actual = utils.leadingZero(12);

      should(expected).equal(actual);
    });
  });
});
