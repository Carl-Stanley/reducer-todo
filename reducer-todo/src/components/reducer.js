export const initialState = [
    {
      item: 'first item - Reducers',
      completed: false,
      id: 101
    }
  ]
  
  export const todoReducer = (state, action) => {
    switch (action.type) {
      // if addTodo === action.type
      case 'AddTodo':
        return [
          ...state,
          {
            item: action.payload,
            completed: false,
            id: Date.now()
          }
        ]
  
   case 'Toggle':
        let complete = state.map(item => {
          if (item.id === action.payload) {
            return {
              ...item,
              completed: !item.completed
            }
          } else {
            return item
          }
        })
        return complete
   
      case 'Remove':
        let Subtract = state.filter(item => {
          if (item.completed === true) {
            return !item.completed
          } else {
            return item
          }
        })
        return Subtract
  
      default:
        return state
    }
  }