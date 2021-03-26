import React from 'react'
import {Button, Input, List} from "antd";
import './TodoLists.css'

const TodoListUI = (props) => {
  return (
      <div style={{marginTop: "10px", marginLeft: "10px"}}>
        <div>
          <Input onChange={props.handleInputChange} value={props.inputValue} placeholder="hello antd" style={{width: "300px", marginRight: "10px"}}/>
          <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
        </div>
        <List
            style={{width: "300px", marginTop: "10px"}}
            bordered
            dataSource={props.list}
            renderItem={(item, index) => (
                <List.Item onClick={() => {props.handleItemDelete(index)}}>
                  {item}
                </List.Item>
            )}
        />
      </div>
  )
}

/*class TodoListUI extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {inputValue, list} = this.props

  }
}*/

export default TodoListUI
