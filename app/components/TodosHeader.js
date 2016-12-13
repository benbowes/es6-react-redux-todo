import React, { PropTypes } from 'react';
import * as styles from './TodosHeader.scss';

/**
* @description Stateless function component. Styles prefixed with `sg-` are
* coming in from a global stylesheet  */

const TodosHeader = ({ counter, warningColour }) => (

  <header className={`sg-row ${styles.todosHeader}`}>
    <h1 className={styles.todosHeading}>
      What todo to do today
    </h1>
    <span
      className={styles.todosCounter}
      style={{ color: warningColour.colour }}
    >
      {counter} items
    </span>
  </header>
);

TodosHeader.propTypes = {
  counter: PropTypes.number,
  warningColour: PropTypes.shape({
    count: PropTypes.number,
    colour: PropTypes.string,
  }),
};

export default TodosHeader;
