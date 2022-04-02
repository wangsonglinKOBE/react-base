import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

// 封装NavLink组件，把公共的封装，非公共的共同props传递

export default class MyNavLink extends Component {
    render() {
        // console.log(this.props)
        // const { to,title } = this.props
        // const { title } = this.props
        return (
            // <NavLink activeClassName="demo" className="list-group-item" to={to}>{title}</NavLink>
            // 批量接收
            // <NavLink activeClassName="demo" className="list-group-item" {...this.props}>{title}</NavLink>
            // 最终优化：不传title
            // <NavLink activeClassName="demo" className="list-group-item" {...this.props}>{this.props.children}</NavLink>
            // 最最终优化版本:
            <NavLink activeClassName="demo" className="list-group-item" {...this.props}/>
        )
    }
}
