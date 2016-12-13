import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import expect from 'expect';
import Button from './Button';

const shallowRenderer = ReactTestUtils.createRenderer();

describe('<Button />', () => {

  it('It should set default props', () => {
    const defaultProps = {
      title: '',
      type: 'button',
      className: 'sg-button',
      onClick: undefined,
      children: undefined,
    };
    shallowRenderer.render(
      <Button />,
    );
    const result = shallowRenderer.getRenderOutput();
    expect( result.props ).toEqual( defaultProps );
  });

  it('It should set title when it receives "props.buttonTitle"', () => {
    shallowRenderer.render(
      <Button buttonTitle={'Some helpful tip'} />,
    );
    const result = shallowRenderer.getRenderOutput();
    expect( result.props.title ).toEqual( 'Some helpful tip' );
  });

  it('It should set type when it receives "props.type"', () => {
    shallowRenderer.render(
      <Button type={'submit'} />,
    );
    const result = shallowRenderer.getRenderOutput();
    expect( result.props.type ).toEqual( 'submit' );
  });

  it('It should set className when it receives "props.classes"', () => {
    shallowRenderer.render(
      <Button classes={'first-class second-class'} />,
    );
    const result = shallowRenderer.getRenderOutput();
    expect( result.props.className ).toEqual( 'first-class second-class' );
  });

  it('It should set onClick when it receives "props.clickHandler"', () => {

    const someFunction = () => {};

    shallowRenderer.render(
      <Button clickHandler={someFunction} />,
    );
    const result = shallowRenderer.getRenderOutput();
    expect( result.props.onClick ).toEqual( someFunction );
  });

  it('It should set add child text when it receives "props.label"', () => {
    shallowRenderer.render(
      <Button label={'Click me!'} />,
    );
    const result = shallowRenderer.getRenderOutput();
    expect( result.props.children ).toEqual( 'Click me!' );
  });

});
