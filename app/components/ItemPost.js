import React from 'react';
class ItemPost extends React.Component{
  render(){
    
    return (
      <div className="post-item">
      <h4 className="post-title">
         <a href="https://www.cuoisml.com/video/1522/cuoi-sml-voi-cac-huong-nay-cac-ong-a.html" target="_blank">
         Khi Lee Sin "mở mắt " </a>
         </h4>

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
    )
  }
}

module.exports = ItemPost;
