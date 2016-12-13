import expect from 'expect';
import { items } from './items';

describe('Reducer "items"', () => {

  it('It should return default state', () => {
    const result = items(undefined, {});
    expect(result).toEqual([]);
  });

  it('REMOVE_ITEM should remove from state at index', () => {
    const initialState = [1, 2, 3];
    let result = items(initialState, {
      type: 'REMOVE_ITEM',
      payload: 2,
    });
    expect(result).toEqual([1, 2]);

    result = items([1, 2, 3], {
      type: 'REMOVE_ITEM',
      payload: 1,
    });
    expect(result).toEqual([1, 3]);
    expect(initialState).toEqual([1, 2, 3]); // should not mutate state
  });

  it('ADD_ITEM should add to end of state', () => {
    const initialState = ['Initial thing'];
    const result = items(initialState, {
      type: 'ADD_ITEM',
      payload: 'My thing',
    });
    expect(result).toEqual(['Initial thing', 'My thing']);
    expect(initialState).toEqual(['Initial thing']); // should not mutate state
  });

});
