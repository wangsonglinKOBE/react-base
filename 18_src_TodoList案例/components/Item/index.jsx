import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

    // 总结：对数据进行修改都是通过数据的唯一标识 id 进行操作的

    state = {mouse: false}

    handleMouse = flag => {
        return () => {
            this.setState({
                mouse: flag
            })
        }
    }

    handleDelete = id => {
        const { deleteTodo } = this.props
        // 这里注意window.confirm()的原生使用，如果确定该方法返回true,否则返回false
        if(window.confirm('确认删除吗？')) 
        deleteTodo(id)
    }

    handleChange = id => {
        return event => {
            const { upTodo } = this.props
            upTodo(id, event.target.checked)
        }
    }

    render() {
        const { id, name, done } = this.props
        const { mouse } = this.state
        return (
            <li
                style={{ backgroundColor: mouse ? '#ddd' : 'white' }} 
                onMouseEnter={this.handleMouse(true)}
                onMouseLeave={this.handleMouse(false)} 
            >
                <label>
                    <input type="checkbox" onChange={this.handleChange(id)} checked={done} />
                    <span>{name}</span>
                </label>
                <button onClick={() => this.handleDelete(id)} className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }}>删除</button>
            </li>
        )
    }
}
