import React, { Component } from 'react'

const DetailData = [ //假设是服务器返回id为1,2,3的详情内容
    { id:'01', content:'你好，中国' },
    { id:'02', content:'你好，Kobe' },
    { id:'03', content:'你好，tom' }
]

// 只要Message组件把id带过来，后端就给你匹配对应的content

export default class Detail extends Component {

    render() {
        // 打印传递过来的params参数
        console.log(this.props)

        const { id, title } = this.props.match.params

        // 查询后台数据，进行匹配
        const findResult = DetailData.find((detailObj) => {
            return detailObj.id === id
        //    return console.log(detailObj.id,'-----', id)
        })

        console.log(findResult)

        return (
            <ul>
                <li>ID:{id}</li>
                <li>title:{title}</li>
                <li>content:{findResult.content}</li>
            </ul>
        )
    }

}
