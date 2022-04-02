import React, { Component, Fragment } from 'react'

export default class Demo4 extends Component {
    render() {
        return (
            <Fragment key={1}>
               <input type="text"/>
               <input type="text"/>
            </Fragment>
        )
    }
}

// Fragment可以写key,在React最终编译的时候回丢掉它，所以只能写key来在虚拟DOM执行Diff算法的时候起作用
