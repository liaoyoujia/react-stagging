import React, { Component } from 'react'
import { Row, Col } from 'antd';
import NavLeft from '../../components/leftNav/leftNav'
import AccHad from '../../components/accountHeader/accountHeader'
import Footer from '../../components/footer/foot'
export class home extends Component {
  render() {
    return (<div>
      <Row>
        <Col span={4} style={{ height: '100vh', backgroundColor: '#001529' }}>
          <NavLeft></NavLeft>
        </Col>
        <Col span={20} style={{ overflow: 'auto', height: '100vh' }}>
          <AccHad></AccHad>
          <Row className="content" style={{ padding: '20px', backgroundColor: '#f1f3f5',minHeight:'69vh'}}>
            {this.props.children}
          </Row>
          <Footer></Footer>
        </Col>
      </Row>
    </div>)
  }
}

export default home
