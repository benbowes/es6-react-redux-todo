import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Label from './components/common/Label';
import RemoveTodo from './components/RemoveTodo';
import TodosHeader from './components/TodosHeader';
import AddNewTodo from './components/AddNewTodo';
import * as styles from './BaseComponent.scss';

/**
* @description combines `props.item[index]` {String} with an iteration `index` {Number} to
* create a unique key.
* note: Spaces are replaced with a `_` character.
* @param itemString {String}
* @param index {Number}
* @returns {String} unique key
* @example
* // returns "Something_Loved-up_And_Excellent_4"
* getUniqueIteratorKey("Something Loved-up And Excellent", 4); */

export const getUniqueIteratorKey = (itemString, index) => {
  return `${itemString.replace(/ /g, '_')}_${index}`;
};

/**
* @description Stateless function component. The root component...
* note: redux `connect()` injects `store.dispatch into `props`
* note: styles prefixed with `sg-` are coming in from a global stylesheet
* @returns {JSX} */

export const BaseComponent = ({ counter, items, warningColor, dispatch }) =>

  <section
    className={styles.todos}
    style={{ borderTopColor: warningColor.color }}
  >

    <TodosHeader
      counter={counter}
      warningColor={warningColor}
    />

    {(counter === 0) && <p>Oh my, you`ve been busy...</p>}

    {items.map((item, index) =>
      <div className="sg-row" key={getUniqueIteratorKey(item, index)}>
        <Label label={item} />
        <RemoveTodo
          buttonTitle={'Remove this item'}
          index={index}
          dispatch={dispatch}
        />
      </div>,
    )}

    <AddNewTodo dispatch={dispatch} />

  </section>;


// Inject state from redux store into BaseComponent as react `props`
// Note: when the second param in connect() is ommitted, store.dispatch is injected into props
export default connect(state => ({
  counter: state.counter,
  items: state.items,
  warningColor: state.warningColor,
}))(BaseComponent);


BaseComponent.propTypes = {
  dispatch: PropTypes.func,
  counter: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.string),
  warningColor: PropTypes.shape({
    count: PropTypes.number,
    color: PropTypes.string,
  }),
};
