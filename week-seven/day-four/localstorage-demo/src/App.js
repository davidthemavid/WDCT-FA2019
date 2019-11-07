import React, { Component } from 'react'

export default class App extends Component {
    state = {
        todos: [
            'Get Groceries',
            'Finish Assignments',
            'Go for a fancy meal'
        ]
    }
    componentDidMount() {
        if(localStorage.todos) {
            this.setState({
                todos: JSON.parse(localStorage.todos)
            })
        }
    }
    addTodo = (event) => {
        event.preventDefault();
        // setState takes a callBack that is
        // executed when state has been successfully
        // saved with new information
        this.setState({
            todos: [...this.state.todos, event.target.todo.value]
        }, () => {
            localStorage.todos = JSON.stringify(this.state.todos)
        })
        event.target.reset()
    }
    render() {
        const todoList = this.state.todos.map(todo => {
            return <li>{todo}</li>
        })
        return (
            <div>
                <h1>Todos</h1>
                <form onSubmit={this.addTodo}>
                <input type="text" name="todo"/>
                <button>Add Todo</button>
                </form>
                <ul>
                    {todoList}
                </ul>
            </div>
        )
    }
}
