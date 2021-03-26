import React, {Component, Fragment} from 'react'
// import PropTypes from 'prop-types'

class TodoItem extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
    this.handleEditClick = this.handleEditClick.bind(this)
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (nextProps.content !== this.props.content) {
      return true
    } else
      return false
  }

  render() {
    const {content} = this.props
    return <Fragment>
      <span>{content}</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span onClick={this.handleClick}>X</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span onClick={this.handleEditClick}>I</span>
    </Fragment>
  }

  handleClick() {
    const {deleteItem, index} = this.props
    deleteItem(index)
  }

  handleEditClick() {
    const {editIem, index} = this.props
    editIem(index)
  }

}

// TodoItem.PropTypes = {
//   content: PropTypes.string,
//   deleteItem: PropTypes.func,
//   index: PropTypes.number
// }



export default TodoItem
