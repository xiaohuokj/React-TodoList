import React, {Component} from 'react'
import store from './store'
// import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './actionTypes'
import {getInputChangeAction, getAddItemAction, getDeleteAction, initListAction} from './store/actionCreators'
import TodoListUI from "./TodoListUI";
import axios from 'axios'


class TodoLists extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }

  render() {
    return (
        <TodoListUI
            inputValue={this.state.inputValue}
            handleInputChange={this.handleInputChange}
            handleBtnClick={this.handleBtnClick}
            list={this.state.list}
            handleItemDelete={this.handleItemDelete}
        />
    )
  }

  componentDidMount() {
    axios.get("/api/todolist").then((res) => {
      const data = res.data
      const action = initListAction(data)
      store.dispatch(action)
    })
    store.subscribe(this.handleStoreChange)
  }

  handleInputChange(e) {
    /*const action = {
      type: CHANGE_INPUT_VALUE,
      value: e.target.value
    }*/
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  handleStoreChange() {
    this.setState(store.getState())
  }

  handleBtnClick() {
    /*const action = {
      type: ADD_TODO_ITEM
    }*/
    const action = getAddItemAction()
    store.dispatch(action)
  }

  handleItemDelete(index) {
    /*const action = {
      type: DELETE_TODO_ITEM,
      index: index
    }*/
    const action = getDeleteAction(index)
    store.dispatch(action)
  }
}

export default TodoLists
