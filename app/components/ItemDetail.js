import React from 'react';
import {connect} from 'react-redux';
class ItemDetail extends React.Component{
  constructor(props) {
  super(props);
  this.state = {result: []};
}

componentDidMount = ()=>{
       $.ajax({
          type: "GET",
          url: 'http://localhost:3001/api/articles',
          data: {},
          xhrFields: {
            withCredentials: false
          },
          crossDomain: true,
          dataType: 'json',
          success: (result)=>{
             this.setState({result : result});
          }
        });
     };
  ChangeState(){
    var {conten_post} = this.props;
    var el = document.getElementById("ListPost");
    var el2 = document.getElementById("ItemDetail");
    if (conten_post ==="DETAIL"){
      el.style.display = 'none';
      el2.style.display = 'inline';
    }
    var {dispatch} = this.props;
    dispatch({type: 'LIST'});
  }
  render(){
    let { id } = this.props.params;
    var item = this.state.result.filter(function(value){
      return value.id === id;
    });
    var indents = item.map(function (i) {
       return (
         <div className="panel panel-default">
         <div className="panel-heading">
         <h4 className="post-item-detail"> {i.title} <p>
         </p>
         </h4>
         </div>
         <div className="panel-body">

         <div className="postdetail-content text-center">
         <img onerror="this.src='http://placehold.it/390x200';" src="https://www.cuoisml.com/uploads/2017/04/27b832e16e734f311fa8f8698b81ccd4.jpg" alt="Nóng quá mấy anh ơi" />
         </div>
         <p className="tag-list">
         Tags:
         </p>
         </div>
         </div>
       );
     });
    return (
      <div >
      {this.ChangeState()}
      {indents}
      </div>
    )
  }
}

module.exports = connect(function (state){
  return {conten_post: state.conten_post};
})(ItemDetail);
