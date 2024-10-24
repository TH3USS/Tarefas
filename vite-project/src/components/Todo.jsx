import React from "react";

const Todo = ({ Todo }) => {
    return (
        <div className="todo">
            <div className="content">
                <p>{todo.text}</p>
                <p className="category">({todo.category})</p>
            </div>
            <div>
                <button className="complete">Completar</button>
                <button className="remove">x</button>
            </div>
        </div>
    )
}

export default Todo

// import React from "react";

// const Todo = () => {
//     return (
//         <div>Todo</div>
//     )
// }

// export default Todo