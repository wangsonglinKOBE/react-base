import React, { Component } from 'react'
// import qs from 'querystring'

const DetailData = [ //假设是服务器返回id为1,2,3的详情内容
    { id:'01', content:'你好，中国' },
    { id:'02', content:'你好，Kobe' },
    { id:'03', content:'你好，tom' }
]

// let obj = {name:'tom', age:25} //name=tom&age=25 => urlencoded
// console.log(qs.stringify(obj)); //name=tom&age=25

// let ooo = "name=kobe&age=18"
// console.log(qs.parse(ooo)) //{name: "kobe", age: "18"}

// 只要Message组件把id带过来，后端就给你匹配对应的content

export default class Detail extends Component {

    render() {
        // 打印传递过来的params参数
        // console.log(this.props)
        // const { id, title } = this.props.match.params



        //打印search参数
        // console.log(this.props); 
        // // 使用react脚手架自带的qs库将 key=value&key=value urlencoded 编码格式转为对象格式
        // console.log(this.props.location.search);
        // const { search } = this.props.location

        // const searchData = qs.parse(search)
        // console.log(searchData); //{?id: "02", title: "消息二"}

        // // 注意去除问号
        // const {id, title} = qs.parse(search.slice(1))



        // 打印state参数
        console.log(this.props);
        const { id, title } = this.props.location.state || {}
        
        // 使用state参数时，注意 “ || {} ” 的使用 
        

        // 查询后台数据，进行匹配
        const findResult = DetailData.find((detailObj) => {
            return detailObj.id === id
        //    return console.log(detailObj.id,'-----', id)
        }) || {}

        console.log('findResult---',findResult)

        return (
            <ul>
                <li>ID:{id}</li>
                <li>title:{title}</li>
                <li>content:{findResult.content}</li>
            </ul>
        )
    }

}
