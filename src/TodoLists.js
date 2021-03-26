import React, {Component} from 'react'
import { Input,Button, List } from 'antd';
import './TodoLists.css'
import store from './store'


class TodoLists extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)

  }

  render() {
    return (
        <div style={{marginTop: "10px", marginLeft: "10px"}}>
          <div>
            <Input onChange={this.handleInputChange} value={this.state.inputValue} placeholder="hello antd" style={{width: "300px", marginRight: "10px"}}/>
            <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
          </div>
          <List
              style={{width: "300px", marginTop: "10px"}}
              bordered
              dataSource={this.state.list}
              renderItem={item => (
                  <List.Item>
                    {item}
                  </List.Item>
              )}
          />
        </div>
    )
  }

  componentDidMount() {
    store.subscribe(this.handleStoreChange)
  }

  handleInputChange(e) {
    const action = {
      type: "change_input_value",
      value: e.target.value
    }
    store.dispatch(action)
  }

  handleStoreChange() {
    this.setState(store.getState())
  }

  handleBtnClick() {
    const action = {
      type: 'add_todo_item'
    }
    store.dispatch(action)
  }
}

export default TodoLists
