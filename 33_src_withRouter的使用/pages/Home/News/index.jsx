import React, { Component } from 'react'

export default class News extends Component {
    componentDidMount() {
        console.log('3s后开启倒计时跳转');
        setTimeout(() => {
            this.props.history.push('/home/message')
        }, 3000)
    }
    render() {
        return (
            <div>
                <ul>
                    <li>news001</li>
                    <li>news002</li>
                    <li>news003</li>
                </ul>
            </div>
        )
    }
}
