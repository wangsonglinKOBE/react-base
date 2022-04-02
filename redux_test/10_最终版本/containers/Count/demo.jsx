import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createIncrementAction} from '../../redux/count_action'

class Count extends Component {

    add = () => {
        // 通知redux加1
        this.props.jiafa(1)
    }

    render() {
        return (
            <div>
                <h2>当前求和为：{this.props.he}</h2>
                <button onClick={this.add}>点我+1</button>
            </div>
        )
    }
}

export default connect(
    // 映射状态
    state => ({he: state}),
    // 映射操作状态的方法
    {jiafa: createIncrementAction}
)(Count)
