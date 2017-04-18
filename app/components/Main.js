import React from 'react';
import Nav from 'Nav';
import Carousel from 'Carousel';
import axios from 'axios';
import Notification from 'Notification';
import NavBar from 'NavBar';
import {connect} from 'react-redux';
import Redux from 'Redux';
import DataArticles from 'DataArticles';
class Main extends React.Component{
  render(){
    //Lay danh sach bai viet
    const article = this.props.route.data;
    var {notification} = this.props;
    var xhtml = notification != null? <Notification txt={notification}/>: null;
    return (
      <div>
      <div  id="header2">
        <div className="container2">
            <Nav />
        </div>
    </div>
    <div  className="Carousel">
    <div className="row">
      <div className="large-12 columns"> <Carousel/></div>
    </div>
    </div>
    <div id="content2" className="container2">
    <NavBar >{this.props.children}</NavBar>
    </div>
    <div className="row">
      <div className="large-12 columns">
      {xhtml}
      </div>
    </div>
    </div>
    )
  }
  componentDidMount(){
    var {dispatch} = this.props;
    axios.get('/getInfo')
    .then(res => {
      if(res.data != 'CHUA_DANG_NHAP'){
        dispatch({type: 'LOG_IN', username: res.data});
      }
    })
    .catch(err => console.log('LOI'))
  }
}

module.exports = connect(function(state){
  return {notification: state.notification}
})(Main);
