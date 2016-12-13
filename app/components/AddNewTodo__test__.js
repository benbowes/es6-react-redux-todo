import 'ignore-styles';
import expect from 'expect';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import AddNewTodo from './AddNewTodo';
import Button from './common/Button';

const shallowRenderer = ReactTestUtils.createRenderer();

describe('<AddNewTodo />', () => {

  it('It should set default props', () => {

    const fakeDispatch = (e) => { return e; };

    shallowRenderer.render(
      <AddNewTodo dispatch={fakeDispatch} />,
    );
    const result = shallowRenderer.getRenderOutput();

    expect( result.type ).toEqual( 'footer' );
    expect( result.props.children.type ).toEqual( 'form' );
    expect( result.props.children.props.onSubmit ).toBeA( 'function' );
    expect( result.props.children.props.children[0].type ).toEqual( 'input' );
    expect( result.props.children.props.children[1].type ).toEqual( Button );
    expect( result.props.children.props.children[1].props.label ).toEqual( 'Add' );
  });

});
