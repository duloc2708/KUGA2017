import React from 'react';
import PageRight from 'PageRight';
import ListPost from 'ListPost';
import Content from 'Content';
class PageWrapper extends React.Component{

  render(){
    return (
      <div id="page-wrapper" className="page-wrapper" >
      <div className="row">
      <div className="large-8 columns">
      <Content>{this.props.children}</Content>
      </div>
      <div className="large-4 columns">
      <div className="PageRight">
      <PageRight/></div>
      </div>
    </div>
    </div>
    )
  }
}

module.exports = PageWrapper;
