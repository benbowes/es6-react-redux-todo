import React, { Component, PropTypes } from 'react';
import Button from './common/Button';
import * as styles from './AddNewTodo.scss';

/**
* @description Class component. Styles prefixed with `sg-` are coming in from a global stylesheet
* @returns {JSX} */

class AddNewTodo extends Component {

  /**
  * @param event {SyntheticEvent} React event that mimics a form submit event */

  addItemHandler( event ) {
    const { dispatch } = this.props;
    event.preventDefault();

    if (this.textInput.value !== '') {
      dispatch({ type: 'ADD_ITEM', payload: this.textInput.value });
      this.textInput.value = ''; // clear input field once redux store has been updated
    }
  }

  render() {
    return (
      <footer className={styles.todosFooter}>
        <form onSubmit={event => this.addItemHandler( event )} className="sg-row">

          <input
            className={styles.todosInput}
            type="text"
            ref={(input) => { this.textInput = input; }}
            placeholder="Add an item..."
          />

          <Button
            buttonTitle={'Add a new item'}
            type={'submit'}
            classes={'sg-button sg-button--primary'}
            label={'Add'}
          />

        </form>
      </footer>
    );
  }
}

AddNewTodo.propTypes = {
  dispatch: PropTypes.func,
};

export default AddNewTodo;
