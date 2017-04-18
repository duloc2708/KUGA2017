import React from 'react';
import ItemPost from 'ItemPost';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import ReactList from 'react-list';
var dtArticle;
class ListPost extends React.Component{
  constructor(props) {
  super(props);
  this.state = {result: []};
  this.handleClick = this.handleClick.bind(this);
}
handleClick() {
  var {dispatch} = this.props;
  dispatch({type: 'DETAIL'});
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
     renderItem(index, key) {
        return <div key={key}>
        <div className="post-item">
          <div className="post-item-header">
            <Link
              to={"/articles/"+dtArticle[index].id}
              target="_blank"
               onClick={this.handleClick}
               key={key}>
               <h4 className="post-title">
               {dtArticle[index].title}
               </h4>
           </Link>
           </div>
            <div className="row">
               <div className="large-8 columns">
                <img  src="https://www.cuoisml.com/uploads/2017/03/7530c5c2260bd8d409f802dde10d985a.png" />
               </div>
               <div className="large-4 columns">
                 <span>Đăng bởi: Admin</span>
               </div>
            </div>
            <hr/>
          </div>
        </div>;
      }
      render() {
  var {type_article} = this.props;
  dtArticle = this.state.result;
  dtArticle = dtArticle.filter(function(o) {
      return (o.type === type_article);
  });
  return <div >
  <div>
      <div onScroll={this.handleScroll}>
        <ReactList
          itemRenderer={::this.renderItem}
          length={dtArticle.length}
          type='variable'
        />
      </div>
    </div>
  </div>
}
}

module.exports = connect(function (state){
  return {conten_post: state.conten_post,dataArticle: state.dataArticle, type_article:state.type_article};
})(ListPost);
