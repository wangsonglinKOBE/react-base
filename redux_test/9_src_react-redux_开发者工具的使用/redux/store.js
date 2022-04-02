/**
 * 该文件专门用于暴露一个store对象，整个应用只用一个store对象
 */


// 引入createStore方法,专门用于创建redux中最为核心的store对象
import {createStore, applyMiddleware, combineReducers} from 'redux'

// applyMiddleware函数：执行中间件redux-thunk

// 引入为Count组件服务的reducer
import countReducer from './reducers/count'

// 引入为Person服务的reducer
import personReducer from './reducers/person'

// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'

// 引入redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension'

// 汇总所有的reducer变为一个总的reducer
const allReducer = combineReducers({
    he: countReducer,
    rens: personReducer
})

// 创建一个store对象并导出 
export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))

