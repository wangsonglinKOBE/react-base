import React, { Component } from 'react'
import Footer from './components/Footer/index.jsx'
import Header from './components/Header/index.jsx'
import List from './components/List/index.jsx'
import './App.css'

export default class App extends Component {

    // 状态在哪里，操作状态的方法就在那里

    state = {
        todos: [
            { id: '001', name: '吃饭', done: true },
            { id: '002', name: '睡觉', done: true },
            { id: '003', name: '打代码', done: false },
            { id: '004', name: '逛街', done: true }
        ]
    }

    addTodo = todo => {
        console.log(todo)
        const { todos } = this.state
        this.setState({
            todos: [todo, ...todos]
        })
    }

    // 同步每行的复选框状态
    upTodo = (id, done) => {
        const { todos } = this.state
        const newTodos = todos.map(todo => {
            // 这里注意：如果id一样就复制一份新的todo对象，并改掉done
            if (todo.id === id) return { ...todo, done }
            else return todo
        })
        this.setState({
            todos: newTodos
        })
    }

    deleteTodo = (id) => {
        const { todos } = this.state
        // 使用filter过滤掉id相同的数据，形成删除
        const newTodes = todos.filter((todo) => {
            return todo.id !== id
        })
        this.setState({
            todos: newTodes
        })
    }

    // 全选
    checkAllTodo = (done) => {
        const { todos } = this.state
        // 加工数据
        const newTodes = todos.map((todo) => {
            return {...todo, done}
        })
        this.setState({
            todos: newTodes
        })
    }

    // 清楚所有已完成
    clearAllDone = () => {
        const { todos } = this.state
        // 过滤数据
        const newTodos =  todos.filter((todo) => {
            return !todo.done
        })
        this.setState({
            todos: newTodos
        })
    }

    render() {
        const { todos } = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo} />
                    <List todos={todos} upTodo={this.upTodo} deleteTodo={this.deleteTodo} />
                    <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
                </div>
            </div>
        )
    }
}
