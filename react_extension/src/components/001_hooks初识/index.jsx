// import React, { Component, createRef, createContext, useContext, useRef, forwardRef } from 'react'

import React, { useRef, forwardRef } from 'react'

const Foo = forwardRef((_, ccc) => {
        // 函数子组件中不再使用useRef或者createRef创建ref
        // 而是在使用函数组件的时候，传入ref这里的ccc就是形参
        const onClick = () => {
            ccc.current.focus()
        }
        return (
            <div>
                <input type="text" ref={ccc} />
                <button onClick={onClick}>聚焦</button>
            </div>
        )
    })

const App = () => {
    // 在父组件中使用inputRef创建ref,并绑定到Foo函数子组件
    const inputRef = useRef()
    const onClick = () => {
        inputRef.current.focus()
        console.log(inputRef);
    }
    return (
        <div>
            {/* 这里将 inputRef 传入forwardRef中的ccc */}
            <Foo ref={inputRef} />
            <button onClick={onClick}>父组件聚焦</button>
        </div>
    )
}
export default App



// // 创建一个Context对象
// const AppContext = createContext()

// // 最外层组件(祖父组件) App 
// const App = () => {
//     return (
//         // 使用AppContext.Provider包裹父组件，并且传值
//         <AppContext.Provider value="kobe-bryant">
//             <Middle />
//         </AppContext.Provider>
//     )
// }

// // 父组件 Middle
// const Middle = () => {
//     return (<> <Foo /> <Bar /> <Baz /> </>)
// }

// // 类 孙子 组件 Foo
// class Foo extends Component {
//     render() {
//         return (
//             // 使用AppContext.Consumer在类组件中接收值(较老的方式，不是很友好)
//             <AppContext.Consumer>
//                 { value => <div>{value}</div> }
//             </AppContext.Consumer>
//         )
//     }
// }

// // 类 孙子 组件 Bar
// class Bar extends Component {
//     // 在类组价的静态属性上绑定contextType并赋值为创建的Context对象
//     static contextType = AppContext
//     render() {
//         // 通过this.context拿到传递过来的value(较新的方法，推荐)
//         return (<div>{this.context}</div>)
//     }
// }

// // 函数 孙子 组件 Baz
// const Baz = () => {
//     // 在函数组件中通过useContext Hook来使用Context,useContext函数中传入创建好的Context对象,
//     // 返回值就是传递过来的value
//     const value = useContext(AppContext)
//     return (<div>{value}</div>)
// }
// export default App




// const FriendStatus = props => {
//     // 调用自定义的HOOK => useExample
//     const isOnline = useExample(props.friend.id)

//     if (isOnline === null) {
//         return 'Loading...'
//     }
//     return isOnline ? 'Online' : 'Offline'
// }

// const FriendListItem = props => {
//     // 调用自定义的HOOK => useExample
//     const isOnline = useExample(props.friend.id)

//     return (
//         <li style={{color: isOnline ? 'green' : 'black'}}>
//             {props.friend.name}
//         </li>
//     )
// }

// export default FriendListItem

// export const useExample = friendID => {
//     const [isOnline, setIsOnline] = useState(null)
//     handleStatusChange = status => {
//         setIsOnline(status.isOnline)
//     }

//     useEffect(() => {
//         ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange)
//         return () => {
//             ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
//         }
//     })
//     return isOnline
// }

// export default function Example(props) {

//     const [count, setCount] = useState(0)
//     useEffect(() => {
//         document.title = `你点击了 ${count} 次按钮`
//     })

//     const [isOnline, setIsOnline] = useState(null)
//     useEffect(() => {
//         ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange)
//         return () => {
//             ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange)
//         }
//     })

//     handleStatusChange = status => {
//         setIsOnline(status.isOnline)
//     }

//     return (
//         <div>
//             <p>你点击了 {count} 次按钮</p>
//             <button onClick={() => setCount(count + 1)} > 点我 </button>
//         </div>
//     )
// }

// export default function Example(props) {
//     const [isOnline, setIsOnline] = useState(null)

//     handleStatusChange = status => {
//         setIsOnline(status.isOnline)
//     }

//     useEffect(() => {
//         ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange)
//         return () => {
//             ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange)
//         }
//     }, [props.friend.id])

//     if (isOnline === null) {
//         return 'Loading...'
//     }

//     return isOnline ? 'Online' : 'Offline'
// }

// export default function Example() {
//     const [count, setCount] = useState(0)

//     // 相当于 componentDidMount 和 componentDidUpdate
//     useEffect(() => {
//         // 使用浏览器的API更新页面标题
//         document.title = `你点击了 ${count} 次按钮`
//     })

//     return (
//         <div>
//             <p>你点击了 {count} 次按钮</p>
//             <button onClick={() => setCount(count + 1)} > 点我 </button>
//         </div>
//     )
// }

// export default function Example() {

//     // 声明一个新的 "state"变量 “count” 
//     const [count, setCount] = useState(0)
//     return (
//         <div>
//             <p>你点击了 {count} 次按钮</p>
//             <button onClick={() => setCount(count + 1)} > 点我 </button>
//         </div>
//     )
// }
