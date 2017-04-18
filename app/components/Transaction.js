import React from 'react';

class Transaction extends React.Component{
  render(){
    let { id } = this.props.params;
    return (
      <div className="small-8 columns small-centered">
        <h1>This is Transaction </h1>
          return <div>The userID from first component is
           {id} <a href="#"
           onClick={()=>browserHistory.push('/')}>
           back</a></div>
      </div>
    )
  }
}

module.exports = Transaction;
