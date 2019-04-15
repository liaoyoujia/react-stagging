import React, { Component } from 'react'
import Util from '../../util/index'
import './accoundHeader.css'
import { connect } from 'react-redux';

 class AccountHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000)

  }
  render() {
    const {list}=this.props
    return (
      <div className="acc-box">
        <div className="acc-head">
          <span>欢迎，河畔一角</span>
          <a href="javascript:;" className="loginOut">退出</a>
        </div>
        <div className="acc-body">
          <div className="acc-page">首页</div>
          <div className="acc-detail">
            <span className="acc-time">{Util.formateDate(this.state.date)}</span>
            <img src="" alt="" />
            <span>多云</span>
          </div>
        </div>
      </div>

    )
  }
}

const mapState = (state) => ({
	list: state.getIn(['menuName'])
})


export default connect(mapState, null)(AccountHeader);