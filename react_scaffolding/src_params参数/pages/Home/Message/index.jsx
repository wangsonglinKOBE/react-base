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
                                    {/* 传递params参数 */}
                                    <Link to={`/home/message/detail/${message.id}/${message.title}`}>{message.title}</Link>&nbsp;&nbsp;
                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                    {/* Detail路由组件接收params参数 */}
                    <Route path="/home/message/detail/:id/:title" component={Detail} />
            </div>
        )
    }
}
