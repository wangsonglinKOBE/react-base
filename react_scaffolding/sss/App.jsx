import React, { Component } from 'react'
import { Button, DatePicker } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import {WechatOutlined, LoadingOutlined} from '@ant-design/icons'
import 'antd/dist/antd.less';
const { RangePicker } = DatePicker;

export default class App extends Component {
   
   
    
    render() {
        function onChange(date, dateString) {
            console.log(date, dateString);
          }
        return (
            <div>
                App...
                <button>点我</button>
                <Button type="primary" icon={<SearchOutlined />}>
                    Search
                </Button>
                <WechatOutlined />
                <LoadingOutlined />
                <DatePicker onChange={onChange} />
                <RangePicker/>
            </div>
        )
    }
}
