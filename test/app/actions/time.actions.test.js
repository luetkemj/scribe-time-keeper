import should from 'should';
import * as actions from '../../../app/actions/time.actions';

describe('time.actions', () => {
  it('should exist', () => {
    should.exist(actions);
  });

  describe('_parseMs', () => {
    it('should work', () => {
      const expected = {
        total: 10,
        remainder: 1,
      };
      const actual = actions._parseMs(101, 10);

      should(expected).deepEqual(actual);
    });
  });

  describe('_setSky', () => {
    it('should be dawn at 6am', () => {
      const expected = 'dawn';
      const actual = actions._setSky(6);

      should(expected).equal(actual);
    });
    it('should be day at noon', () => {
      const expected = 'day';
      const actual = actions._setSky(12);

      should(expected).equal(actual);
    });
    it('should be dusk at 6pm', () => {
      const expected = 'dusk';
      const actual = actions._setSky(18);

      should(expected).equal(actual);
    });
    it('should be night at midnight', () => {
      const expected = 'night';
      const actual = actions._setSky(0);

      should(expected).equal(actual);
    });
  });

  describe('_setRotation', () => {
    it('should work', () => {
      const expected = -360;
      const actual = actions._setRotation(0, 12, 0);

      should(expected).equal(actual);
    });
  });
});
