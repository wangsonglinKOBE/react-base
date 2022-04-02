import React from 'react'
import ReactDOM from 'react-dom'
// :注意：只能有一个路由器 BrowserRouter
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
)