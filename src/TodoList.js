import React, {Component, Fragment} from 'react'
import TodoItem from './TodoItem'
import './style.css'

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelecte = this.handleItemDelecte.bind(this)
  }

  render() {
    return (
        <Fragment>
          <div>
            <label htmlFor="insertArea">输入内容</label>
            <input id="insertArea" className='input' value={this.state.inputValue} onChange={this.handleInputChange} type="text"/>
            <button onClick={this.handleBtnClick}>提交</button>
          </div>
          <ul>
            {this.getTodoItem()}
          </ul>
        </Fragment>
    )
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
          <div key={index}>
            <TodoItem content={item} index={index} deleteItem={this.handleItemDelecte}/>
            {/*<li key={index} onClick={this.handleItemDelecte.bind(this, index)} dangerouslySetInnerHTML={{__html: item}}></li>*/}
          </div>
      )
    })
  }

  handleInputChange(e) {
    const value = e.target.value
    this.setState(() => ({
      inputValue: value
    }))
    /*this.setState({
      inputValue: e.target.value
    })*/
  }

  handleBtnClick() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ""
    }))
  }

  handleItemDelecte(index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState(() =>({
      list: list
    }))
  }
}

export default TodoList
