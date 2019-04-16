import React, { Component } from 'react'
import Util from '../../util/index'
import './accoundHeader.css'
import { connect } from 'react-redux';
import * as axios from '../../axios/index'

class AccountHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      weatherImage: '',
      weather: ''
    };
  }
  componentDidMount() {
    // 改变时间
    setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000)

    // 请求天气情况
    let city = '北京';
    axios.jsonp({
      url: 'http://api.map.baidu.com/telematics/v3/weather?location=' + encodeURIComponent(city) + '&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
    }).then((res) => {
      if (res.results[0].weather_data[0]) {
        let data = res.results[0].weather_data[0]
        this.setState({
          weatherImage: data.dayPictureUrl,
          weather: data.weather
        })
      }

    })

  }
  render() {
    const { menuName } = this.props
    const {weatherImage, weather}=this.state
    return (
      <div className="acc-box">
        <div className="acc-head">
          <span>欢迎，河畔一角</span>
          <a href="javascript:;" className="loginOut">退出</a>
        </div>
        <div className="acc-body">
          <div className="acc-page">{menuName}</div>
          <div className="acc-detail">
            <span className="acc-time">{Util.formateDate(this.state.date)}</span>
            <img src={weatherImage} alt="" className="weatherImage" />
            <span>{weather}</span>
          </div>
        </div>
      </div>

    )
  }
}

const mapState = (state) => ({
  menuName: state.getIn(['menuName'])
})


export default connect(mapState, null)(AccountHeader);