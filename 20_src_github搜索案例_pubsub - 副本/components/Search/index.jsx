import React, { Component } from 'react'
import axios from 'axios'
// 引入pubsub-js消息订阅与发布js库
import PubSub from 'pubsub-js'

export default class Search extends Component {


    search = () => {
        console.log('Search组件发布消息了')
        
        // 获取用户的输入
        // 连续解构赋值并重命名
        let { keyWordElement: {value:keyWord} } = this
        console.log(keyWord)

        // 发送请求前通知List更新状态
        PubSub.publish('getData', {isFirst:false, isLoading:true})

        // 向github发送请求
        axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
            response => {
                // 请求成功后通知List更新状态
                PubSub.publish('getData', {isLoading:false, users:response.data.items})
            },
            error => {
                console.log('请求失败', error);
                // 请求失败后通知List更新状态 ,这里注意 err: '请求出错'+ error.message
                PubSub.publish('getData', {isLoading:false, err: '请求出错'+ error.message})
            },
        )
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索github用户</h3>
                <div>
                    <input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
            </section>
        )
    }
}
