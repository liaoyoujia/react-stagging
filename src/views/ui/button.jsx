import React, { Component } from 'react'
import { Card, Button } from 'antd';
import './ui.css'
export default class button extends Component {
  render() {
    return (
      <div>
        <Card title="基础按钮" className="card">
          <Button type="primary">imooc</Button>
          <Button>imooc</Button>
          <Button type="dashed">imooc</Button>
          <Button type="danger">imooc</Button>
          <Button type="danger" disabled>imooc</Button>
        </Card>
        <Card title="图形按钮" className="card">
          <Button type="primary" shape="circle" icon="search" />
          <Button type="primary" icon="search">Search</Button>
          <Button shape="circle" icon="search" />
          <Button icon="search">Search</Button>
        </Card>
        <Card title="基础按钮" className="card">
          <Button type="primary">imooc</Button>
          <Button>imooc</Button>
          <Button type="dashed">imooc</Button>
          <Button type="danger">imooc</Button>
          <Button type="danger" disabled>imooc</Button>
        </Card>
      </div>
    )
  }
}
