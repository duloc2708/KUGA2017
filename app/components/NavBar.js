import React from 'react';
var Tabs = require('react-simpletabs');
import {connect} from 'react-redux';
import PageWrapper from 'PageWrapper';
import { Link } from 'react-router';
import Test2 from 'Test2';
import ListPost from 'ListPost';
class NavBar extends React.Component{
  constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
     }
    handleClick(index) {
      var {dispatch} = this.props;
      dispatch({type: 'ARTICLE'+index});
      var {conten_post} = this.props;
      console.log(conten_post);

      if (conten_post ==="LIST"){
        var el = document.getElementById("ListPost");
        el.style.display = 'inline';
        var el2 = document.getElementById("ItemDetail");
        el2.style.display = 'none';
      }
    }
  handleAfter(selectedIndex, $selectedPanel, $selectedTabMenu) {
    this.handleClick(selectedIndex);

  }
  render(){
    var el = document.getElementById("ListPost");
    return (
      <div className='contain_tab'>
      <Tabs tabActive={2}
        onAfterChange={this.handleAfter.bind(this)}  >
         <Tabs.Panel title='Mới' >
        <PageWrapper >{this.props.children}</PageWrapper>
         </Tabs.Panel>
         <Tabs.Panel title='Video'  >
        <PageWrapper >{this.props.children}</PageWrapper>
        </Tabs.Panel>
         <Tabs.Panel title='Hình ảnh'>
         <PageWrapper >{this.props.children}</PageWrapper>
         </Tabs.Panel>
         <Tabs.Panel title='Stream'>
           <PageWrapper >{this.props.children}</PageWrapper>
         </Tabs.Panel>
       </Tabs>
      </div>
    )
  }
}

module.exports = connect(function (state){
  return {type_article: state.type_article,conten_post: state.conten_post};
})(NavBar);
