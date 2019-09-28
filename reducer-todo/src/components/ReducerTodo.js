import React, { useState, useReducer } from 'react'

import { initialState, todoReducer } from './reducer'

const Todo = () => {
 
  const [task, setTask] = useState('')
  console.log(task)


  const [state, dispatch] = useReducer(todoReducer, initialState)
  console.log(state)

  
  const handleChanges = e => {
    setTask(e.target.value)
  }

  return (
    <>
      <>
        <div className='container'>
          <h3>Reducer Practice</h3>

          <input
            type='text'
            value={task}
            onChange={handleChanges}
            placeholder='New To do item'
          />
          <button onClick={() => dispatch({ type: 'AddTodo', payload: task })}>
            Add
          </button>
         
          {state.map(state => {
            return (
              <div
                className={state.completed ? 'completed' : ''}
                onClick={() => dispatch({ type: 'Toggle', payload: state.id })}
              >
                <p>{state.item}</p>
              </div>
            )
          })}
        </div>
      </>
    </>
  )
}

export default Todo