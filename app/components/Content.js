import React from 'react';
import ListPost from 'ListPost';
import ItemDetail from 'ItemDetail';
class Content extends React.Component{

  render(){
  return (
    <div>
    <div className="row" style={{"display" : "none"}}  id="ItemDetail">
        <div className="large-12 columns">
          {this.props.children}
        </div>
    </div>
    <div className="row"  id="ListPost">
    <div className="large-12 columns">
    <ListPost /></div>
    </div>
  </div>
    )
  }
}

module.exports = Content;
