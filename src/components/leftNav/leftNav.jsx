import React, { Component } from 'react'
import './leftNav.css'
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom'
import NaMenu from '../../config/menuConfig'
import { connect } from 'react-redux';

const SubMenu = Menu.SubMenu;

const MenuItem = Menu.Item
class LeftNav extends Component {

  // 菜单渲染
  renderMenu(data) {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu key={item.key} title={item.title}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <MenuItem key={item.key} title={item.title}>
        <NavLink to={item.key}>{item.title}</NavLink>
      </MenuItem>
    })

  };


  // 左侧栏点击事件
  handleClick=()=>{

  }
  render() {
    const {changeMenu}=this.props
    return (
      <div className="nav-left">
        <div className="logo">
          <img src='/assets/logo-ant.svg' alt="" />
          <h4>Imooc MS</h4>
        </div>
        <div className="menu">
          <Menu
            onClick={changeMenu}
            mode="vertical"
            theme="dark"
          >
            {this.renderMenu(NaMenu)}
          </Menu>

        </div>
      </div>
    )
  }
}

const mapDispatch = (dispatch) => ({
	changeMenu(name) {
    console.log(name,123123213);
    
		dispatch(actionCreators.changeMenu(name));
	}
});

export default connect(null, mapDispatch)(LeftNav);