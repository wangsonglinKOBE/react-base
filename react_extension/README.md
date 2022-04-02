## 1.setState更新状态的两种写法
(1). setState(stateChange, [callback])  --> 对象式的setState
     1. stateChange为状态改变对象(该对象可以体现出状态的更改)
     2. callback是可选的回调函数，它在状态更新完毕、界面也更新后(render调用后)才被调用

(2). setState(updater, [callback]) --> 函数式的setState
     1. updater为返回stateChange对象的函数
     2. updater可以接收到state和props
     3. callback和对象式同理
    
    总结：1.对象式setState是函数式的简写方式(语法糖)
          2.如果要在状态改变后获取最新的状态数据，要在第二个callback函数中获取

## 2.Hooks
     1. 什么是React Hook/Hooks？4
          1). Hook是 React 16.8.0版本增加的新特新/新语法
          2). 可以让你在函数组件中使用 state 以及其他的 React 特性

     2. 三个常用的Hook
          1). State Hook: React.useState()
          2). Effect Hook: React.useEffect()
          3). Ref Hook: React.useRef()

     3. State Hook
          1). State Hook让函数组件也可以有state状态，并进行状态的读写操作
          2). 语法：const [xxx, setxxx] = React.useState(initValue)
          3). useState()说明：
               参数：第一次初始化指定的值在内部作了缓存
               返回值：包含2个元素，第一个为内部当前状态值，第二个为更新状态值的函数
          4). setXxx()的两种写法：
               setxxx(newValue):参数作为非函数值，直接指定新的状态值，内部用其覆盖原来的状态值
               setXxx(value => newValue):参数为函数，接收原本的状态值，返回新的状态值，内部用其覆盖原来的状态值

     4. Effect Hook
          (1). Effect Hook 可以让你在函数组件中执行副作用操作(用于模拟类组件中的生命周期钩子)
          (2). React中的副作用操作：
               发ajax请求数据
               设置订阅 / 启动定时器
               手动更改真实DOM
          (3). 语法和说明
               useEffect (() => {
                    <!-- 在此可以执行任何副作用操作 -->

                    return () => { //在组件卸载前执行
                         <!-- 在此做一些收尾工作，比如清除定时器/取消订阅 -->
                    }
               }, [stateValue]) // 如果是指定的[],回调函数只会在第一次render()后执行
          (4). 可以把 useEffect Hook 看做如下三个函数的组合
                componentDidMount()
                componentDidUpdate()
                componentWillunmount()

     5. Ref Hook
          (1). Ref Hook 可以在函数组件中存储/查找组件内的标签或任意其他数据
          (2). 语法：const refContainer = useRef()
          (3). 作用: 保存标签对象，功能与React.createRef()一样

## Context
     理解：一种组件间通信方式，常用于【祖组件】与【后代组件】间通信

## 组件优化
component的2个问题：
     1. 只要执行了setState(), 即使不改变状态数据【setState({})】,组件也会重新执行render()  ==> 效率低
     2. 只要当前组件重新render(),就会自动重新render子组件，纵使子组件没有用到父组件的任何数据 ==> 效率低

造成低效率的原因：
     Component中的shouldComponentUpdate()总是返回true => 这个控制是否更新的钩子默认总是返回true

效率高的做法：
     那么只有当组件的state或者props数据发生改变时才重新调用render()

解决的做法：
     方式一：
          重写shouldComponentUpdate()方法
          比较新旧state或者新旧props数据，如果变化才返回true，否则返回false
     方式二：
          使用PureComponent
          PureComponent重写了shouldComponentUpdate(),只有state或props数据有变化时才返回true
          注意：
               只是进行state和props数据的浅比较，如果只是数据对象内部数据变了，则还是返回false
               所以不要直接修改state数据，而是要产生新数据
          项目中一般使用PureComponent来优化



## render props
如何在组件内部动态传入，相传谁就穿谁的，传入带内容的组件或者是标签或者结构啥的？

Vue中：
     使用slot技术，也就是通过组件标签传入结构 <A> <B/> </A>
React中：
     使用children props : 通过组件标签体传入结构 
     <A> <h2>我是要传入的标签体结构</h2> </A>
     <A> <B/> </A>
     {this.props.children}
     问题：如果B组件需要A组件内部的数据，===> 做不到
      

     使用render props : 通过组件标签传入结构，一般用render属性 
     <A render={(data) => <B data={data}/>}> </A>
     A组件：{this.props.render(内部state数据)} => 调用render函数传入A组件内部的参数
     B组件: 读取A组件传入的数据显示： {this.props.data}
     
