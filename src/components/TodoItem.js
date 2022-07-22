import React from 'react';

const TodoItem=(props) =>{

    const getStyle = () => {
        let textDecoration = ''
        if (props.todo.completed) {
            textDecoration = 'line-through'
        } else {
            textDecoration = 'none'
        }

    return {
        textDecoration: textDecoration
    }

    }


    return(
        <div className="TodoItem">
            <input className="checkbox"
                type={'checkbox'}
                onChange={() => props.toggleCompleted(props.todo.id)}
            />            
            <p style={getStyle()}>{props.todo.title}</p>
            <button 
            id="closeButton"
            onClick={() => props.deleteTodo(props.todo.id)}> X </button>
        </div>
    )
}

export default TodoItem;