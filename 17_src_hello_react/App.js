// 创建外壳组件 App
// react中默认暴露了React，和分别暴露了Component，采用以下引入方式
import React, {Component} from 'react'

import Hello from './components/Hello/index.jsx'
import Welcome from './components/Welcome/index.jsx'

// 创建并暴露 App 组件
export default class App extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Hello/>
                <Welcome/>
            </div>
         );
    }
}
