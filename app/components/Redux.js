import React from 'react';
import { render } from 'react-dom';
import ListPost from 'ListPost';
import Nav from 'Nav';
import Carousel from 'Carousel';
import axios from 'axios';
import Notification from 'Notification';
import NavBar from 'NavBar';
class Redux extends React.Component{
  render(){
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

    <div className="row">
      <div className="large-12 columns"> <NavBar/></div>
    </div>

    </div>

    </div>
    );
  }
}

module.exports = Redux;
