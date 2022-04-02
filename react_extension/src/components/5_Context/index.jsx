import React, { Component, useContext } from 'react'
import './index.css'

// 创建Context容器
const MyContext = React.createContext()
const { Provider } = MyContext

export default class Demo5 extends Component {

    state = { userName: 'kobe-bryant' }

    render() {
        return (
            <div className="parent">
                <h3>我是Demo5组件</h3>
                <h4>我的用户名是：{this.state.userName}</h4>
                <Provider value={this.state.userName}>
                    <A />
                </Provider>
            </div>
        )
    }
}

class A extends Component {
    render() {
        return (
            <div className="child">
                <h3>我是A组件</h3>
                <B />
                <C />
            </div>
        )
    }
}

class B extends Component {

    static contextType = MyContext

    render() {
        console.log(this.context);
        return (
            <div className="grand">

                <h3>我是B组件</h3>
                <h4>我从Demo5组件接收到的用户名是：{this.context}</h4>

            </div>
        )
    }
}

const C = () => {

    // 使用 useContext Hook拿到祖辈传递的值 这里的 MyContext 为 创建Context的容器，接收值value就是传递过来的值
    value = useContext(MyContext)

    return (
        <>
         <h3>我是C组件</h3>
         <h4>我从Demo5组件接收到的用户名是：{value}</h4>
        </>
    )
}
