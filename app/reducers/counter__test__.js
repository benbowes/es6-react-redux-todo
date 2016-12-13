import expect from 'expect';
import { counter } from './counter';

describe('Reducer "counter"', () => {

  it('It should return default state', () => {
    const result = counter(undefined, {});
    expect(result).toEqual(0);
  });

  it('REMOVE_ITEM should remove 1 from state', () => {
    const result = counter(6, {
      type: 'REMOVE_ITEM',
      payload: 'Any old string',
    });
    expect(result).toEqual(5);
  });

  it('ADD_ITEM should add 1 to state', () => {
    const result = counter(6, {
      type: 'ADD_ITEM',
      payload: 'Some string',
    });
    expect(result).toEqual(7);
  });

});
