import React from 'react';
import './App.css';
import ToDoItem from './components/toDoItem/todoItem';
import todosData from '../todosData'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this) //Necessário para quanto usar SetState como função
    }

    handleChange(id) {
        this.setState((prevState) => {
            const updatedTodos = prevState.todos.map((todo) => {
                if (todo.id === id)
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                return todo;
            })
            
            return {
                todos: updatedTodos
            }
        })
    }

    render() {
        const ToDoComponents = this.state.todos.map((item) => {
        return (
        <ToDoItem key={item.id} id={item.id} text={item.text} completed={item.completed} handleChange={this.handleChange} />
        )
        })

        return (
        <div className="todo-list">
        {ToDoComponents}
        </div>
        );
    }
}

export default App;
