import React from 'react'

function InputComponents({ inputVal, writeTodo, addTodo }) {

    return (
        <div className="main">
            <div className="input">
                <input
                    type="text"
                    placeholder="Enter your task"
                    className="input-box"
                    value={inputVal}
                    onChange={writeTodo}
                />
            </div>

            <div className="input">
                <button
                    className="btn-box"
                    type="button"
                    onClick={addTodo}
                >
                    Add
                </button>
            </div>
        </div>
    )
}

export default InputComponents
