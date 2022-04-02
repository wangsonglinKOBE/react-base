import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
    state = {
        messageArr: [
            { id:'01', title: '消息一' },
            { id:'02', title: '消息二' },
            { id:'03', title: '消息三' }
        ]
    }

    //跳转的同时把id带到Detail组件 

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
                                    <Link to={{pathname:'/home/message/detail', state:{id:message.id, title:message.title}}}>{message.title}</Link>&nbsp;&nbsp;

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
            </div>
        )
    }
}
