import React, { Component } from 'react'
import './index.css'

export default class Parent extends Component {
    render() {
        return (
            <div className='parent'>
                <h3>我是Parent组件</h3>
                {
                /* 首先一看到一个组件的props定义为了render，那么他就是render props了，这是程序员们心照不宣的反射
                   其实没什么高大上的，就是给A组件传了一个名为render的props，只是这个render的值是一个函数，返回的是一个组件，
                   你想让A组件中预留的位置展示谁，你就返回对应的组件
                   在A组件中也就是父组件中会调用render函数，顺便可以传参，B组件将参数作为自己的props
                 */}
                <A render={name => <B name={name}/>} /> 

                {/* <A>
                    <B/>
                </A> */}
            </div>
        )
    }
}

class A extends Component {
    state = {name: 'kobe'}
    render() {
        return (
            <div className="a">
                <h3>我是A组件</h3>
                {/* 下面就是在A组件中预留了一个位置，相当于插槽，你传入谁谁就展示在这，
                并且还给展示在这的组件传入了A组件的状态 */}
                {this.props.render(this.state.name)}

                {/* {this.props.children} */}
            </div>
        )
    }
}

class B extends Component {
    render() {
        return (
            <div className='b'>
                <h3>我是B组件</h3>
                {this.props.name}
            </div>
        )
    }
}

// 当父子组件再爷爷辈的组件中展示时 <yeye> <A> <B/> </A> </yeye> 就可以使用render props 通过props传递state也很方便