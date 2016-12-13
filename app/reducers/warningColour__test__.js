import expect from 'expect';
import { getColour, warningColour } from './warningColour';
import * as colours from '../constants/colours';

describe('Reducer "warningColour"', () => {

  it('It should return default state', () => {
    const result = warningColour(undefined, {});
    expect(result).toEqual({ count: 0, colour: colours.DEFAULT_COLOUR });
  });

  it('ADD_ITEM should increment count and switch colours from DEFAULT_COLOUR to WARNING_COLOUR when count is 4', () => {
    const initialState = { count: 4, colour: colours.DEFAULT_COLOUR };
    const result = warningColour(initialState, {
      type: 'ADD_ITEM',
      payload: 'this bit does not matter',
    });
    expect(result).toEqual({ count: 5, colour: colours.WARNING_COLOUR });

    expect(initialState).toEqual({ count: 4, colour: colours.DEFAULT_COLOUR }); // should not mutate state
  });

  it('REMOVE_ITEM should decrement count and switch colours from DANGER_COLOUR to WARNING_COLOUR when count is 7', () => {
    const initialState = { count: 7, colour: colours.DANGER_COLOUR };
    const result = warningColour(initialState, {
      type: 'REMOVE_ITEM',
      payload: 'this bit does not matter',
    });
    expect(result).toEqual({ count: 6, colour: colours.WARNING_COLOUR });

    expect(initialState).toEqual({ count: 7, colour: colours.DANGER_COLOUR }); // should not mutate state
  });

});

describe('Reducer "warningColour" - getColour function', () => {

  it('It should return DEFAULT_COLOUR when todo count is between 0 and 4', () => {
    let result = getColour(0);
    expect(result).toEqual({ count: 0, colour: colours.DEFAULT_COLOUR });

    result = getColour(1);
    expect(result).toEqual({ count: 1, colour: colours.DEFAULT_COLOUR });

    result = getColour(4);
    expect(result).toEqual({ count: 4, colour: colours.DEFAULT_COLOUR });
  });

  it('It should return WARNING_COLOUR when todo count is 5 or 6', () => {
    let result = getColour(5);
    expect(result).toEqual({ count: 5, colour: colours.WARNING_COLOUR });

    result = getColour(6);
    expect(result).toEqual({ count: 6, colour: colours.WARNING_COLOUR });
  });

  it('It should return DANGER_COLOUR when todo count 7 or more', () => {
    let result = getColour(7);
    expect(result).toEqual({ count: 7, colour: colours.DANGER_COLOUR });

    result = getColour(8);
    expect(result).toEqual({ count: 8, colour: colours.DANGER_COLOUR });
  });

});
