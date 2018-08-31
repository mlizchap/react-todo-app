import React, { Component } from 'react';

import Header from '../Header/Header';
import Input from '../Input/Input';
import TodoList from '../TodoList/TodoList';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            todos: [],
            error: false
         };
    }
    submitTodo = (todo) => {
        if (this.state.todos.filter(i => i.name === todo.name).length > 0) {
            this.setState({ error: true })
        } else if (todo.name) {
            this.setState({ todos: [...this.state.todos, todo], error: false })
        }
    }
    markCompleted = (name) => {
        const todos = this.state.todos.map(todo => {
            return (todo.name === name) ? {...todo, completed: !todo.completed} : todo 
        })
        this.setState({ todos });
    }
    render() {
        return (
            <div>

                <Header />
                <div className="container">

                    <Input handleSubmit={this.submitTodo}/>
                    <ErrorMessage isError={this.state.error}/>
                    <TodoList todos={this.state.todos} handleClick={this.markCompleted} />
                </div>
            </div>
        );
    }
}

export default App;

