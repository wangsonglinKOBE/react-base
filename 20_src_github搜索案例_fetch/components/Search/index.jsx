import React, { Component } from 'react'
// import axios from 'axios'
// 引入pubsub-js消息订阅与发布js库
import PubSub from 'pubsub-js'

export default class Search extends Component {


    search = async () => {
        console.log('Search组件发布消息了')

        // 获取用户的输入
        // 连续解构赋值并重命名
        let { keyWordElement: { value: keyWord } } = this
        console.log(keyWord)

        // 发送请求前通知List更新状态
        PubSub.publish('getData', { isFirst: false, isLoading: true })

        //#region 
        // 向github发送请求---使用axios发送
        // axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
        //     response => {
        //         // 请求成功后通知List更新状态
        //         PubSub.publish('getData', {isLoading:false, users:response.data.items})
        //     },
        //     error => {
        //         console.log('请求失败', error);
        //         // 请求失败后通知List更新状态 ,这里注意 err: '请求出错'+ error.message
        //         PubSub.publish('getData', {isLoading:false, err: '请求出错'+ error.message})
        //     },
        // )
        //#endregion

        // 向github发送请求---使用fetch发送 （关注分离模式）未优化
        // fetch(`https://api.github.com/search/users?q=${keyWord}`)为一个promise实例
        // fetch(`https://api.github.com/search/users?q=${keyWord}`).then(
        //     // 与服务器建立连接 就算 404也是走 '联系服务器成功了'，除非断网了，
        //     // 服务器没有返回任何状态码，才会走 '联系服务器失败了'
        //     response => {
        //         console.log('联系服务器成功了')
        //         // console.log('联系服务器成功了', response.json())//联系服务器成功了 Promise {<pending>} 注意这里response.json()only one
        //         return response.json()
        //         //#region 
        //         // 这里是.then所指定的成功的回调有返回值，并且返回值是一个Promise实例对象
        //         // 如果.then所指定的成功的回调的返回值是一个Promise实例对象，
        //         // 那么就把该实例对象，作为整个.then方法的返回值了
        //         //#endregion
        //     },
        //     error => {
        //         console.log('联系服务器失败了', error)
        //         return new Promise(() => { })
        //     }
        //     //#region 
        //     // .json()是response对象原型上的方法 返回值是一个Promise实例对象 {<pending>}
        //     // 注意这里的{<pending>}实例对象表示的不是一个pending状态的Promise实例
        //     // 那么我们需要获取的数据就隐藏在这个response.json()返回的这个{<pending>}实例对象里
        //     // 如果联系服务器成功了，并且获取数据也成功了，那么这个Promise实例({<pending>}) 的状态就变为成功的状态
        //     // 而且里面保存这我们需要获取的数据
        //     // 如果联系服务器成功了，但是获取数据却失败了，那么这个Promise实例({<pending>})的状态就是失败的状态
        //     // 而且里面保存着失败的原因
        //     //#endregion
        // ).then(
        //     // 这里是链接服务器成功之后的获取数据
        //     response => { console.log('获取数据成功了', response) },
        //     error => { console.log('获取数据失败了', error) }
        //     //#region 
        //     /*
        //     接下来做个有趣的试验，如果我把控制台的NetWork条是为Offline状态，也就是断网状态
        //     那肯定是执行'联系服务器失败了'，但是这个获取数据的.then方法中的两个回调，走还是不走呢？
        //     走的话走哪个回调？这就是Promise功底了，上一级返回一个失败的回调中返回值为undefined
        //     undefined属于非Promise值，如果失败的回调返回的是非Promise值，那么这个.then返回的就是
        //     一个成功的Promise，值为undefined
        //     打印结果为：获取数据成功了 undefined
        //     所以说连服务器都链接失败了，就别谈什么获取数据成功和失败了，
        //     所以如果链接服务器失败了的话，到这儿就打住，别忘下走了
        //     中断Promise链 返回一个初始化状态的Promise实例: return new Promise(()=>{})
        //     */
        //     //#endregion
        // )

        // fetch网络请求优化版本 => 传透调用：统一处理错误
        // fetch(`https://api.github.com/search/users?q=${keyWord}`).then(
        //     response => { return response.json() }
        // ).then(
        //     response => { console.log('获取数据成功了', response) },
        // ).catch(
        //     error => { console.log('请求出错', error) }
        // )


        // fetch网络请求终极版本 => async await
        //#region 
        /*.then()方法里指定了成功的回调和失败的回调，但是，
          在优化版本中.then()方法已经不指定失败的回调了，
          .then()方法只剩下成功的回调了，那么终极版本就此诞生，
          fetch(`https://api.github.com/search/users?q=${keyWord}`)本省就是一个Promise实例对象，
          不然也不能去.then()
          await是一个专门取成功的Promise回调的人的结果，但是使用它必须使用async加在函数上
         await fetch(`https://api.github.com/search/users?q=${keyWord}`),
         这样使用 await+Promise实例对象 的形式 取到的就是这个Promise实例对象成功的结果啦
         await只能等到一个Promise实例对象成功的结果，失败的它可不管
         所以处理异常我们需要使用try{}catch{}
        */
        //#endregion
        try {
            // 链接服务器成功的返回值
            const response = await fetch(`https://api.github.com/search/users?q=${keyWord}`)
            //  获取数据成功的返回值 
            const data = await response.json() //等一个成功的promise
            PubSub.publish('getData', { isLoading: false, users:data.items })
            console.log(data);
        } catch (error) {
            console.log('请求出错', error)
            PubSub.publish('getData', { isLoading: false, err:error.message })
        }
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索github用户</h3>
                <div>
                    <input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词点击搜索" />&nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
            </section>
        )
    }
}
