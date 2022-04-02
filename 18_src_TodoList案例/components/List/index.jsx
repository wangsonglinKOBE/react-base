import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {

    // 对接收的props进行类型、必要性的限制
    static propTypes = {
        upTodo: PropTypes.func.isRequired,
        todos: PropTypes.array.isRequired,
        deleteTodo: PropTypes.func.isRequired
    }

    render() {
        const { todos, upTodo, deleteTodo } = this.props
        return (
            <ul className="todo-main">
                {
                    todos.map(todo => {
                        return <Item key={todo.id} {...todo} upTodo={upTodo} deleteTodo={deleteTodo}/> //注意使用批量传递一个对象哦
                        // return <Item key={todo.id} name={todo.name} done={todo.done}/>
                    })
                }
            </ul>
        )
    }
}
