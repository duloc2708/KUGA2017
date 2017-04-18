import React from 'react';

class DataArticles extends React.Component{
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
  render(){
    return (
      <div >
        {this.state.result}
      </div>
    )
  }
}

module.exports = DataArticles;
