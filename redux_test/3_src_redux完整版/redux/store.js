/**
 * 该文件专门用于暴露一个store对象，整个应用只用一个store对象
 */


// 引入createStore方法,专门用于创建redux中最为核心的store对象
import {createStore} from 'redux'

// 引入为Count组件服务的reducer
import countReducer from './count_reducer'

// 创建一个store对象并导出
export default createStore(countReducer)

 