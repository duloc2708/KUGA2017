import React from 'react';
import {Link, IndexLink} from 'react-router';

class Nav extends React.Component{
  render(){
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="dropdown menu" data-dropdown-menu>
            <li className="menu-text">Cười SML</li>
            <li>
              <a href="#">Chuyên mục</a>
              <ul className="menu vertical">
                <li><a href="#">Bài mới</a></li>
                <li><a href="#">Video</a></li>
                <li><a href="#">Hình ảnh</a></li>
              </ul>
            </li>
            <li><IndexLink to="/" activeClassName="active">Đăng nhập</IndexLink></li>
            <li><Link to="/account" activeClassName="active">Account</Link></li>
            <li><Link to="/transaction" activeClassName="active">Hỗ trợ</Link></li>
            <li><Link to="/redux" activeClassName="active">Redux</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li><input type="search" placeholder="Tìm kiếm"/></li>
            <li><button type="button" className="button">Tìm kiếm</button></li>
          </ul>
        </div>
      </div>
    )
  }
}

module.exports = Nav;
