import React from 'react'

function Todo({ todo, delTodo, index }) {

    return (
        <li>
            <p>{todo}</p>
            <button
                className="delete-btn"
                onClick={() => delTodo(index)}
            >
                Delete
            </button>
        </li>
    )
}

export default Todo
