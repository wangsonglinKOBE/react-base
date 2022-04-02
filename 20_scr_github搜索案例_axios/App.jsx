import React, { Component } from 'react'
import List from './components/List'
import Search from './components/Search'

export default class App extends Component {

    state = { //初始化状态
        users: [], // users初始值为数组
        isFirst: true, //是否为第一次打开页面
        isLoading: false, //标识是否处于加载中
        err: '', //存储请求相关的错误信息
    }

    //#region
        // App中更新（获取）user的方法
        // saveUsers = users => {
        //     this.setState({
        //         users:users
        //     })
        // }
    //#endregion
    

    // 更新App的state
    updateAppState = stateObj => {
        this.setState( stateObj )
    }

    // 当Search组件发送请求获取到users并更新到App的state中，App再将users传递给List展示

    render() {
        return (
            <div className="container">
                {/* 将saveUsers方法传递给Search请求数据 */}
               {/* <Search saveUsers={this.saveUsers}/> */}
               <Search updateAppState={this.updateAppState}/>
               <List {...this.state}/>
            </div>
        )
    }
}
