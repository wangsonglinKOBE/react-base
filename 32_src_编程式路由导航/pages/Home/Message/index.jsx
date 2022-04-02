import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
    state = {
        messageArr: [
            { id: '01', title: '消息一' },
            { id: '02', title: '消息二' },
            { id: '03', title: '消息三' }
        ]
    }

    // 一起下切换编程式导航传参的时候注意操作：
    // 什么样的 携带参数 模式匹配什么样的 路由组件声明 再匹配什么样的 接收方式 三者缺一不可

    replaceShow = (id, title) => {
        // 编写一段代码，让其实现跳转到Detail组件，且为replace跳转
        // replace跳转+携带params参数
        // this.props.history.replace(`/home/message/detail/${id}/${title}`)

        // replace跳转+携带search参数
        // this.props.history.replace(`/home/message/detail/?id=${id}&title=${title}`)

        // replace跳转+携带state参数
        this.props.history.replace('/home/message/detail', { id, title })
    }

    pushShow = (id, title) => {
        // 编写一段代码，让其实现跳转到Detail组件，且为push跳转
        // push跳转+携带params参数
        // this.props.history.push(`/home/message/detail/${id}/${title}`)

        // push跳转+携带search参数
        // this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`)

        // push跳转+携带state参数
        this.props.history.push('/home/message/detail', { id, title })
    }


    back = () => {//回退
        this.props.history.goBack()
    }
    forward = () => {//前进
        this.props.history.goForward()
    }
    go = () => {
        this.props.history.go(-2)
    }

    render() {
        const { messageArr } = this.state
        return (
            <div>
                <ul>
                    {
                        messageArr.map(message => {
                            return (
                                <li key={message.id}>

                                    {/* 向路由组件传递params参数 */}
                                    {/* <Link to={`/home/message/detail/${message.id}/${message.title}`}>{message.title}</Link>&nbsp;&nbsp; */}


                                    {/* 向路由组件传递search参数: urlencoded格式编码 */}
                                    {/* <Link to={`/home/message/detail/?id=${message.id}&title=${message.title}`}>{message.title}</Link>&nbsp;&nbsp; */}

                                    {/* 向路由组件传递state参数*/}
                                    <Link to={{ pathname: '/home/message/detail', state: { id: message.id, title: message.title } }}>{message.title}</Link>&nbsp;&nbsp;

                                    &nbsp;<button onClick={() => this.pushShow(message.id, message.title)}>push查看</button>
                                    &nbsp;<button onClick={() => this.replaceShow(message.id, message.title)}>replace查看</button>

                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                {/* Detail路由组件声明params参数 */}
                {/* <Route path="/home/message/detail/:id/:title" component={Detail} /> */}

                {/* search参数无需声明接收，正常注册路由即可 */}
                {/* <Route path="/home/message/detail" component={Detail} /> */}

                {/* state参数无需声明接收，正常注册路由即可 */}
                <Route path="/home/message/detail" component={Detail} />


                <button onClick={this.back}>回退</button> &nbsp;
                <button onClick={this.forward}>前进</button> &nbsp;
                <button onClick={this.go}>go</button>

            </div>
        )
    }
}
