// 引入Count的UI组件
import CountUI from '../../components/Count'
// 引入action
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/count_action'

// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'

/*
  1. mapStateToProps函数返回的是一个对象
  2. 返回对象中的key就作为传递给UI组件的props的key,value就作为传递给UI组件的props的value
  3. mapStateToProps用于给UI组件传递状态
 */
function mapStateToProps(state) {  //state:redux中的状态，初始化为0
    return { count: state }
    // 相当于<CountUI n={900}/>
}


/*
  1. mapDispatchToProps函数返回的是一个对象
  2. 返回对象中的key就作为传递给UI组件的props的key,value就作为传递给UI组件的props的value
  3. mapDispatchToProps用于给UI组件传递操作状态的方法
 */
function mapDispatchToProps(dispatch) { //dispatch:redux中的dispatch
    return {
        // 通知redux执行加法
        jia: value => dispatch(createIncrementAction(value)),
        // 通知redux执行减法
        jian: value => dispatch(createDecrementAction(value)),
        jiaAsync: (value, time) => dispatch(createIncrementAsyncAction(value, time))
    }
}

// 使用connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)