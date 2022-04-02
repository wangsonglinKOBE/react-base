import React, { Component } from 'react'
// 引入pubsub-js消息订阅与发布js库
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {

    state = { //初始化状态
        users: [], // users初始值为数组
        isFirst: true, //是否为第一次打开页面
        isLoading: false, //标识是否处于加载中
        err: '', //存储请求相关的错误信息
    }

    componentDidMount() {
        // 订阅消息：_, 参数为站位符
        this.token = PubSub.subscribe('getData', (_, stateObj) => {
            console.log('List组件收到数据了', stateObj)
            this.setState(stateObj)
        })
    }

    componentWillUnmount() {
        // 取消订阅
        PubSub.unsubscribe(this.token)
    }

    render() {
        let { users,isFirst,isLoading,err } = this.state
        console.log(this.state)
        console.log(users instanceof Array);
        console.log(users instanceof Object);
        console.log(users);
        return (
            <div className="row">
                {
                    isFirst ? <h2>欢迎使用，输入关键字，随后点击搜索</h2> :
                    isLoading ? <h2>Loading...</h2> :
                    err ? <h2 style={{color: 'red'}}>{err}</h2> :
                    Array.from(users).map(userObj => {
                        return (
                            <div className="card" key={userObj.id}>
                                <a href={userObj.html_url} target="_blank" rel="noreferrer">
                                    <img alt="kobe" src={userObj.avatar_url} style={{ width: '100px' }} />
                                </a>
                                <p className="card-text">{userObj.login}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
