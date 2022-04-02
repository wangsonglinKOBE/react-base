import React, { Component } from 'react'

export default class Child extends Component {

    state = {
        // users: [
        //     { id: '001', name: 'kobe', age: 46 },
        //     { id: '002', name: 'jack', age: 18 },
        //     { id: '003', name: 'tom', age: 19 }
        // ]
        users: 'kobe'
    }

    render() {
        return (
            <div>
                <h2>我是Child组件</h2>
                {
                    this.state.users.map(userObj =>
                        <h3 key={userObj.id}>{userObj.name}---{userObj.age}</h3>
                    )
                }
            </div>
        )
    }
}
