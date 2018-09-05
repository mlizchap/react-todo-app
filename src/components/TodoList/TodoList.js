import React, { Component } from 'react';

import Todo from '../Todo/Todo'
import './TodoList.scss';

class TodoList extends Component {

    render() {
        //return <div />
        return this.props.todos.map((i) => {
            return (
                <Todo 
                    className="component-todolist"
                    key={i.name} 
                    name={i.name} 
                    completed={i.completed} 
                    {...this.props} 
                />
            )
        })
    }
}

export default TodoList;