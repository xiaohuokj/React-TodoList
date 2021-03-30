import React from "react";
import {connect} from "react-redux";

// 简写：
const todoListReactRedux = (props) => {
  const {inputValue, handleClick, list, changeInputValue, handleDeleteClick} = props; // 可以通过解构赋值简写 移除下面代码中的this
  return (
      <div>
        <div>
          <input onChange={changeInputValue} value={inputValue} type="text"/>
          <button onClick={handleClick}>提交</button>
        </div>
        <ul>
          {
            list.map((item, index) => {
              return <li onClick={() => {handleDeleteClick(index)}} key={index}>{item}</li>
            })
          }
        </ul>
      </div>
  )
}

/*class todoListReactRedux extends Component {
  render() {
    // const {inputValue, handleClick, list, changeInputValue, handleDeleteClick} = this.props; // 可以通过解构赋值简写 移除下面代码中的this
    return (
        <div>
          <div>
            <input onChange={this.props.changeInputValue} value={this.props.inputValue} type="text"/>
            <button onClick={this.props.handleClick}>提交</button>
          </div>
          <ul>
            {
              this.props.list.map((item, index) => {
                return <li onClick={() => {this.props.handleDeleteClick(index)}} key={index}>{item}</li>
              })
            }

          </ul>
        </div>
    )
  }
}*/

const mapStateToProps = (state) => {
  return {
      inputValue: state.inputValue,
      list: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e) {
      const action = {
        type: "change_input_value",
        value: e.target.value
      }
      dispatch(action)
    },
    handleClick() {
      const action = {
        type: "add_item"
      }
      dispatch(action)
    },
    handleDeleteClick(index) {
      const action = {
        type: "del_item",
        index
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(todoListReactRedux);
