import React from 'react';
import TodoItem from './TodoItem';


const Todos = (props) => {
    return (
        <div className= "Todos"> 
            {props.todos.map((todo) => {
                return (<TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    toggleCompleted={props.toggleCompleted}
                    deleteTodo={props.deleteTodo}
                    />)
            })}
        </div>
    )

}


export default Todos;