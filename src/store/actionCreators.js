import {GET_INIT_LIST, CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION} from './actionTypes'

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value: value
})

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM,
})

export const getDeleteAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index: index
})

export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
})

// 使用 redux-thunk 时发请求 getTodoList
/*export const getTodoList = () => {
  return (dispatch) => {
    axios.get("/api/todolist").then((res) => {
      const data = res.data
      const action = initListAction(data)
      dispatch(action)
    })
  }
}*/
// 使用redux-saga 时发请求 getInitList
export const getInitList = () => ({
  type: GET_INIT_LIST
})

