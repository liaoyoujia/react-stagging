import React, { Component } from 'react';
import * as axios from '../../axios/index'
import { Table,Empty } from 'antd';
import './city.css'
const columns = [{
  title: '城市ID',
  dataIndex: 'id',
}, {
  title: '城市名称',
  dataIndex: 'name',
}, {
  title: '用车模式',
  dataIndex: 'mode',
}, {
  title: '营运模式',
  dataIndex: 'op_mode',
}, {
  title: '城市管理员',
  dataIndex: 'city_admins',
}, {
  title: '城市开通时间',
  dataIndex: 'open_time',
}, {
  title: '操作时间',
  dataIndex: 'update_time',
}, {
  title: '操作人',
  dataIndex: 'sys_user_name',
}


];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    id: `Edward King ${i}`,
    name: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

class City extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: []
    };
  }

  render() {
    let { tableData } = this.state
    return (
      <div className='city'>
        {
          tableData.length ? <Table bordered columns={columns} dataSource={tableData} /> : <Empty className="empty"/>
        }
      </div>
    );
  }

  componentDidMount() {
    axios.getCityTable({ page: 1 }).then((res) => {
      // if (res.data.result.item_list) {
        // let tableData = res.data.result.item_list
        // this.setState({
        //   // tableData
        // })
        

      // }

    })

  }
}
export default City;