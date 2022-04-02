import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {

    // 对接收的props进行类型、必要性的限制
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    handleUp = (event) => {
        const { target, keyCode } = event
        if (keyCode !== 13)
            return
        if (target.value.trim() === '') {
            alert('输入不能为空！')
            return
        }
        console.log(target.value, keyCode)
        const todoObj = { id: nanoid(), name: target.value, done: false }
        this.props.addTodo(todoObj)
        event.target.value = ''
    }

    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}
