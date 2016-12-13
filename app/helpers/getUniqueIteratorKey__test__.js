import expect from 'expect';
import getUniqueIteratorKey from './getUniqueIteratorKey';

describe('getUniqueIteratorKey', () => {

  it('getUniqueIteratorKey should return a string without spaces', () => {
    expect( getUniqueIteratorKey( 'Some kind of wonderful', 5 ) ).toEqual( 'Some_kind_of_wonderful_5' );
    expect( getUniqueIteratorKey( 'I BE SHOUTING WID MY ALL CAPS', 2 ) ).toEqual( 'I_BE_SHOUTING_WID_MY_ALL_CAPS_2' );
  });

});
