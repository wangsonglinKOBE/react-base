import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

// withRouter是一个函数，用来将一般组件身上加上路由组件所具有的东西，也就是可以操作history了

class Header extends Component {

    back = () => {//回退
        this.props.history.goBack()
    }

    render() {
        console.log('Header组件收到的props是', this.props);
        return (
            <>
                <h2>React Router Demo</h2>
                <button onClick={this.back}>回退</button> &nbsp;
            </>
        )
    }
}
export default withRouter(Header)
// withRouter函数接收一个参数为一般组件
// 这样一般组件也会通过props收到路由组件所收到的对象，来操作路由
// withRouter的返回值是一个新组件 => 加工后的Header组件