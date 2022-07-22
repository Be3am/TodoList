import React from "react";

class TodoForm extends React.Component {
    
    state = {title: ''}

    handleChange = (event) => {
        const newTodoTitle = event.target.value
        this.setState({title: newTodoTitle})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addTodo(this.state.title)
        this.setState({title: ''})
    }
    
    render(){
        return (
            <div className="todoForm">
                <form onSubmit={(event) => {this.handleSubmit(event)}}>
                    <input 
                        type={'text'}
                        placeholder= 'Add ur todo'
                        style={{height:'60px', widht:'40px', fontSize: '16px'}}
                        onChange= {(event) => {this.handleChange(event)}}
                        />
                    <button >Add todo</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;