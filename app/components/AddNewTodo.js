import React, { Component } from 'react';
import Button from './common/Button';
import * as styles from './AddNewTodo.scss';

class AddNewTodo extends Component {

  addItemHandler( event ) {
    event.preventDefault();

    if (this.textInput.value !== '') {
      console.log({ type: 'ADD_ITEM', payload: this.textInput.value });
      this.textInput.value = '';
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

export default AddNewTodo;
