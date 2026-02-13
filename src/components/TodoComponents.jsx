import React from 'react'
import Todo from './Todo'

function TodoComponents({ todoList, delTodo }) {

    return (
        <ul id="tasklist">
            {todoList.map((todo, index) => {
                return (
                    <Todo
                        key={index}
                        index={index}
                        todo={todo}
                        delTodo={delTodo}
                    />
                )
            })}
        </ul>
    )
}

export default TodoComponents
