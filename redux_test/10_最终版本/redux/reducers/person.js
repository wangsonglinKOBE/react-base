import { ADD_PERSON } from '../constant'

// 初始化人的列表
const initState = [{ id: '001', name: 'kobe', age: 18 }]

export default function personReducer(preState = initState, action) {
    const { type, data } = action
    switch (type) {
        case ADD_PERSON: //若是添加一个人
            // 此处不能这样写，这样写会导致preState被改写了，unshift是改变原数组的方法
            // preState.unshift(data) 
            return [data, ...preState]
        default:
            return preState
    }
}