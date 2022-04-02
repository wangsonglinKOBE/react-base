import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom' //NavLink => 让路由连接在点击以后拥有高亮模式
import Home from './pages/Home'                   //NavLink给Link连接添加了一个active的类名，点谁谁就加上active
import About from './pages/About'                 //（使用bootatrap的情况下）
import Header from './components/Header' //Header是一般组件
import MyNavLink from './components/MyNavLink'

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2  col-xs-8">
                        <div className="page-header">
                            <Header />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* 原生html中，靠<a>跳转不同的页面 */}
                            {/* <a href="./about.html" className="list-group-item">About</a>
                            <a href="./home.html" className="list-group-item active">Home</a> */}

                            {/* 在React中靠路由连接实现切换组件 */}
                            {/* activeClassName为NavLink的高亮样式配置属性，不写默认为active
                                这个写了demo在index.html中写了样式，注意!important的使用，最高权重
                             */}
                            {/* <MyNavLink to="/about" title="About" a={1} b={2} c={3}/>
                            <MyNavLink to="/home" title="Home"/> */}
                            {/* 最终优化 */}
                            <MyNavLink to="/about" a={1} b={2} c={3}>About</MyNavLink>
                            <MyNavLink to="/home">Home</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由*/}
                                {/* <Switch>组件为了提高路由匹配效率，找到一个匹配路由就展示，不再往下遍历找下一个 */}
                                <Switch>
                                <Route path="/about" component={About} />
                                <Route path="/home" component={Home} />
                                {/* 重定向，如果没有任何匹配的Route则走Redirect */}
                                <Redirect to="/about" />
                                </Switch>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
