import React from 'react';
import FormRow  from './FormRow';

class FormList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { value: 'Be awesome', done: false },
                { value: 'Learn React', done: true },
                { value: 'Use JSX in my CodePens', done: true }
            ]
        };
        this.addTodo = this.addTodo.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    addTodo(e) {
        e.preventDefault();
        const todos = this.state.todos;

        todos.push({
            value: this.state.inputValue,
            done: false
        });

        this.setState({
            todos,
            inputValue: ''
        });

        // Return false for form
        return false;
    }
    handleChange(e) {
        this.setState({
            inputValue: e.target.value
        });
    }
    removeTodo(index) {
        this.state.todos.splice(index, 1);

        this.setState({
            todos: this.state.todos
        });
    }
    markTodoDone(index) {
        const todos = this.state.todos;
        const todo = this.state.todos[index];
        todos.splice(index, 1);
        todo.done = !todo.done;

        if (todo.done) {
            todos.push(todo);
        } else {
            todos.unshift(todo);
        }

        this.setState({ todos });
    }
    render() {
        const todos = this.state.todos.map((todo, index) => (
                <FormRow
                    key={index}
                    value={todo.value}
                    done={todo.done}
                    onClickClose={this.removeTodo.bind(this, index)}
                    onClickDone={this.markTodoDone.bind(this, index)}
                />
            )
        );

        return (
            <div className='container'>
                <div className='col-xs-10 col-xs-offset-1'>
                    <h1>My Todo List</h1>
                    {todos}
                    <form
                        className='form-inline todo-form col-xs-8 col-xs-offset-2'
                        role='form'
                        onSubmit={this.addTodo}>
                        <div className='input-group'>
                            <label className='sr-only' htmlFor='todoInput'></label>
                            <input type='text' value={this.state.inputValue}
                                   onChange={this.handleChange}
                                   className='form-control'
                                   placeholder='What do you need to do?'
                            />
                            <span className='input-group-btn'>
                                <button className='btn btn-default'>Add Todo</button>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default FormList;
