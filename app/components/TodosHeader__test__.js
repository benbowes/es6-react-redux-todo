import 'ignore-styles';
import expect from 'expect';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import TodosHeader from './TodosHeader';

const shallowRenderer = ReactTestUtils.createRenderer();

describe('<TodosHeader />', () => {
  it('It should render as expected when at several item\'s are supplied', () => {

    shallowRenderer.render( <TodosHeader counter={2} warningColour={{ count: 0, colour: '#ff0000' }} /> );

    const result = shallowRenderer.getRenderOutput();

    expect(result.type).toEqual( 'header' );
    expect(result.props.children[0].type).toEqual( 'h1');
    expect(result.props.children[0].props.children).toEqual( 'What todo to do today' );
    expect(result.props.children[1].props.children).toEqual( [2, ' items'] );
  });

});
