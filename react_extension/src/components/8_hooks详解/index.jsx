import React, { useState } from 'react'

const Index = () => {

    const [count, setCount] = useState(0)

    const [obj, setObj] = useState({name: 'kobe-bryant'})

    const [arr, setArr] = useState([1, 2, 3])

    const [func, setFunc] = useState(() => {
        // return 1;
        return {name: 'juerry'}
    })

    return (
        <div style={{marginLeft: '20px'}}>
            <h2>{count}</h2>
            <input type='text' defaultValue={count} /> <br/><br/>
            <button onClick={() => setCount(count+1)}>changeCount</button> 

            <h2>{obj.name}----{obj.age}</h2>
            <button onClick={() => setObj({...obj, name: 'jems', age: '18'})}>changeOjb</button>
            
            <h2>{arr}</h2>
            <button onClick={() => setArr([0, ...arr,4])}>changeArr</button>

            <h2>{func.name}</h2>
        </div>
    )
}

export default Index

/* 
改变对象或者数组时setXxx方法都要是一个新的对象或者数组

如果是函数类型则为返回值

总结：[xxx, setXxx] = useState()
在useState表达式中， xxx也就是数组的第一个值就是 useState()中初始的值，
比如初始值是一个数组，那么xxx就是一个数组。或者初始值是一个对象，那么xxx就是这个对象
甚至初始值是一个函数，那么xxx就是这个函数的返回值
*/
