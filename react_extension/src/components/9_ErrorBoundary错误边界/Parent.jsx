import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {

    state = {
        hasError: '' //用于标识子组件是否产生错误
        // 当子组件产生错误，则携带错误调用下面的钩子函数，
        // 钩子函数返回一个新的状态对象，新的状态对象直接更新状态
    }

    // 当Parent组件的子组件出现报错则会调用该钩子函数并携带错误信息
    static getDerivedStateFromError(error) {
        console.log(error)
        // 注意这里返回一个状态对象
        return {hasError: error}
    }

    // 当子组件在渲染过程中出现错误则会调用该钩子函数
    componentDidCatch() {
        console.log('此处统计错误，反馈给服务器，用于通知编码人员进行bug修复')
    }

    render() {
        return (
            <div>
                <h2>我是Parent组件</h2>
                {/* 这里判断一下错误状态是否为真 */}
                { this.state.hasError ? <h4>网络繁忙，请稍后再试</h4> : <Child /> }
            </div>
        )
    }
}
