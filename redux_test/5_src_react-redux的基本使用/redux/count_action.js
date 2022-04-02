/**
 * 该文件专门为Count组件生成action对象
 */

import {INCREMENT, DECREMENT} from './constant'

//  创建action对象：通过函数返回一个对象来作为action对象，同步action
 export const createIncrementAction = data => ({ type: INCREMENT, data })
 export const createDecrementAction = data => ({ type: DECREMENT, data })
 
//  异步action,就是指action的值为函数,异步action中一般都会调用同步action
 export const createIncrementAsyncAction = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, time)
    }
 }

//  注意这里不用引入store了，也不用storestore.dispatch，而是通过函数参数获取dispatch

//  ({ type: 'increment', data }):返回一个对象的写法


