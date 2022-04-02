import React, { Component } from 'react'
import List from './components/List'
import Search from './components/Search'

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <Search />
                <List />
            </div>
        )
    }
}
