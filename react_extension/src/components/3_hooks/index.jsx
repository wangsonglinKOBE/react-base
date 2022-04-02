import React from 'react'
import ReactDOM from 'react-dom'

// class Demo3 extends React.Component {
//     state = {count: 0}
//     add = () => {
//         // this.setState(state => {
//         //     return {count: state.count+1}
//         // } )
//         this.setState(state => ({count: state.count + 1}))
//     }

//     componentDidMount() {
//        this.timer =  setInterval(() => {
//             this.setState(state => ({count: state.count + 1}))
//         }, 1000)
//     }

//     unmount = () => {
//         ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//     }

//     componentWillUnmount() {
//         clearInterval(this.timer)
//     }

//     myRef = React.createRef()

//     show = () => {
//         console.log(this.myRef);
//         console.log(this.myRef.current.value);
//     }

//     render() {
//         return (
//             <div>
//                 <h2>当前求和为：{this.state.count}</h2>
//                 <button onClick={this.add}>点我+1</button>
//                 <button onClick={this.unmount}>卸载组件</button> <br/>
//                 <input type="text" ref={this.myRef} />
//                 <button onClick={this.show}>点我提示数据</button>
//             </div>
//         )
//     }
// }


function Demo3() {
    console.log('Demo3被调用了几次');  // 1+n 次

    const [count, setCount] = React.useState(0)
    // [count,setCount]:第一个参数为状态state,第二个为更新状态的方法

    const [name, setName] = React.useState('kobe')

    const [age, setAge] = React.useState(22)

    function add() {
        // setCount(count + 1) //第一种写法
        setCount(count => count + 1)
    }
    function changeName() {
        setName(name => name + '-bryant')
    }
    function changeAge() {
        setAge(33)
    }

    React.useEffect(() => {
        let timer = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [])
    // [count]不写该数组监测所有state,写谁就监测谁
    // 不写监测所有，相当于一上来就监测所有，相当于componentDidMount
    // 写谁就监测谁相当于谁更新了状态值，就触发，相当于componentDidUpdate
    // 这里useEffect的第二个参数，也就是这个回调函数的返回的函数相当于componentWillUnmount
    // 注意，一个组件里面可以写多个useEffect()

    // 卸载组件的回调
    function unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    const myRef = React.useRef()

    // 提示输入的回调
    function show() {
        console.log(myRef.current.value)
    }

    return (
        <div>
            <h2>当前求和为：{count}</h2>
            <h2>我的名字是：{name}</h2>
            <h2>我的年龄是：{age}</h2>
            <button onClick={add}>点我+1</button>
            <button onClick={changeName}>点我改名</button>
            <button onClick={changeAge}>点我改年龄</button>
            <button onClick={unmount}>卸载组件</button> <br/>
            <input type="text" ref={myRef}/>
            <button onClick={show}>点我打印数据</button>
        </div>
    )
}

export default Demo3
 