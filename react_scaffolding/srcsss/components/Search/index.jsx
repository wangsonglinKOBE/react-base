import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {


    search = () => {
        // 获取用户的输入
        //#region 
            //   const { keyWordElement } = this
            //   const { value } = keyWordElement
        //#endregion
        // 连续解构赋值并重命名
        let { keyWordElement: {value:keyWord} } = this
        console.log(keyWord)

        // 发送请求前通知App更新状态
        this.props.updateAppState({isFirst:false, isLoading:true})

        // 发送网络请求 
        //#region
            // 使用代理向端口号为5000的服务器发送请求
            // axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then
            // 注意：如果使用代理，脚手架和中间代理是同一个域下的可以省略 http://localhost:3000
            // axios.get(`/api1/search/users?q=${keyWord}`).then
        //#endregion
        
        // 向github发送请求
        axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
            response => {
                console.log('请求成功', response.data);
                //#region
                     // 接收App的props调用更新users的函数传入获取的user更新到App中的state中
                     // this.props.saveUsers(res.data.items)
                //#endregion
               
                // 请求成功后通知App更新状态
                this.props.updateAppState({ isLoading:false, users:response.data.items})
            },
            error => {
                console.log('请求失败', error);
                // 请求失败后通知App更新状态 ,这里注意 err: '请求出错'+ error.message
                this.props.updateAppState({ isLoading:false, err: '请求出错'+ error.message})
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
