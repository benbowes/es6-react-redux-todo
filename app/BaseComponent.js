import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Label from './components/common/Label';
import RemoveTodo from './components/RemoveTodo';
import TodosHeader from './components/TodosHeader';
import AddNewTodo from './components/AddNewTodo';
import getUniqueIteratorKey from './helpers/getUniqueIteratorKey';
import * as styles from './BaseComponent.scss';

/**
* @description Stateless function component. The root component...
* note: redux `connect()` injects `store.dispatch into `props`
* note: styles prefixed with `sg-` are coming in from a global stylesheet */

export const BaseComponent = ({ counter, items, warningColour, dispatch }) =>

  <section
    className={styles.todos}
    style={{ borderTopColor: warningColour.colour }}
  >

    <TodosHeader
      counter={counter}
      warningColour={warningColour}
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
  warningColour: state.warningColour,
}))(BaseComponent);


BaseComponent.propTypes = {
  dispatch: PropTypes.func,
  counter: PropTypes.number,
  items: PropTypes.arrayOf(
    PropTypes.string,
  ),
  warningColour: PropTypes.shape({
    count: PropTypes.number,
    colour: PropTypes.string,
  }),
};
