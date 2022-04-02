import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

    handleCheckAll = (e) => {
        this.props.checkAllTodo(e.target.checked)
    }

    // 清楚所有已完成
    handleClearAllDone = () => {
        this.props.clearAllDone()
    }

    render() {
        const { todos } = this.props
        //已完成数
        const doneTodo = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)

        // reduce的第一个参数为()=>{}回调函数，第二个参数为做统计时的初始值0
        // 回调函数中传入的 pre 为该回调函数上一次的返回值，第一次调用时由于没有上一次所以为传入的0为主
        // 第二次调用时该pre就是该回调函数第一次调用时的返回值
        // current为当前遍历项，这里为todos数组中的每一个对象
        // const doneTodo = todos.reduce((pre, todo) => {
        //     // return pre + 1 
        //     /*
        //      这里加一表示循环完了所有的todos项，所以这里的pre依次为0,1,2,3最终为三加一为四
        //      所以这里return pre + 1返回的是todos数组中对象的总数   
        //      */ 
        //     // return pre + (todo.done ? 1 : 0)
        //     /*
        //      判断done是否完成如果为真就+1算入统计
        //     */
        // }, 0)
        
        // 总数
        const total = todos.length

        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.handleCheckAll} checked={doneTodo === total && total !== 0 ? true : false}/>
                </label>
                <span>
                    <span>已完成{doneTodo}</span> / 全部{total}
                </span>
                <button onClick={this.handleClearAllDone} className="btn btn-danger">清楚已完成任务</button>
            </div>
        )
    }
}
