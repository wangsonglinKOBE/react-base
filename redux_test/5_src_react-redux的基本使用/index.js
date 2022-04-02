import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import store from './redux/store'

ReactDom.render(<App/>, document.getElementById('root'))

// 监测redux中状态的改变，若redux的状态发生了改变，那么重新渲染App组件
store.subscribe(() => {
    ReactDom.render(<App/>, document.getElementById('root'))
})