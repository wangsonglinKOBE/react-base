import React, { Component, PureComponent } from 'react'
import './index.css'

export default class Parent extends PureComponent {

    state = {carName: '奔驰c63', stus: ['小张', '小李']}

    changeCar = () => {
        // this.setState({carName: '迈巴赫'})
        
        // const obj = this.state
        // obj.carName = '迈巴赫'
        // console.log(obj === this.state); //他两是一个对象，使用PureComponent时返回false
        // this.setState(obj)
        
        /* 
        在使用component时可以直接向上面这样修改carName
        但是在PureComponent中向上面这样直接修改state对象是无效的，不会发生更新
        下面是正确的写法：就是写一个新的对象
        */
       this.setState({carName: '迈巴赫'})



    }

    add = () => {
        const {stus} = this.state
        stus.unshift('小刘')
        this.setState({stus})
        /* 
        同样的在Component中可以向上面这样操作状态，直接修改原来的数据
        但是在PureComponent中这样做并不会生效并不会添加 小刘 他会觉得这个数据对象没有变，是指向一个地址的
        所以在PureComponent中不能有修改原数据的操作，必须直接建立新数据，像下面这样做
        */

        this.setState({stus: ['小刘', ...stus]})
    }

    // shouldComponentUpdate(nextProps, nextState) { //这里注意接收参数的顺序
    //     // console.log(this.props, this.state); //变化前的props和state
    //     // console.log(nextProps, nextState); //变成的props和state,变化后的
    //     // if(this.state.carName === nextState.carName) return false
    //     // else return true

    //     // 为啥这里 return !this.state.carName === nextState.carName这么写当我两次的状态不一样的时候
    //     // 也不更新呢？有点怪

    //     // return !this.state.carName === nextState.carName

    // }

    render() {
        console.log('Parent--------render');
        const {carName} = this.state
        return (
            <div className="parent">
                <h3>我是Parent组件</h3>
                <h3>{this.state.stus}</h3>
                <span>我的车名字是：{carName}</span>  <br/>
                <button onClick={this.changeCar}>点我换车</button>
                <button onClick={this.add}>添加一个小刘</button>
                <Child carName='奥迪'/>
            </div>
        )
    }
}

class Child extends PureComponent {

    // shouldComponentUpdate(nextProps, nextState) { //这里注意接收参数的顺序
    //     console.log(this.props, this.state); //变化前的props和state
    //     console.log(nextProps, nextState); //变成的props和state,变化后的
        
    //     return !this.props.carName === nextProps.carName
    //     // 同样的情况这里这样写 return !this.props.carName === nextProps.carName，就算发生改变了props
    //     // 也不更新了，奇怪的很，还是写判断好一些


    //     // return this.props.carName === nextProps.carName 这句话表示 return trun 
    //     // 如果要表示他两相等返回false，就return !true => return !this.props.carName === nextProps.carName

    // }
    
    render() {
        console.log('Child--------render');
        return (
            <div className="child">
                <h3>我是Child组件</h3>
                <span>我接到的车是：{this.props.carName}</span>
            </div>
        )
    }
}


/* 
总结：
*/

