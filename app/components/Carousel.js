import React from 'react';
import {Link, IndexLink} from 'react-router';
class Carousel extends React.Component{
render(){
return (
<div className="container">
<ul>
    <li>
    <div className="media-carousel" >
    <a className="thumbnail" href="http://68gate.com" target="_blank">
    <img src="https://cuoisml.com/uploads/vodao.jpg" href="http://68gate.com"/>
    </a>
    <p><a href="http://68gate.com" target="_blank">Võ Đạo</a></p>
    </div>
    </li>
    <li>
    <div className="media-carousel" >
    <a className="thumbnail" href="http://68gate.com" target="_blank">
    <img src="https://cuoisml.com/uploads/thanhbai.jpg" href="http://68gate.com"/>
    </a>
    <p><a href="http://68gate.com" target="_blank">Võ Đạo</a></p>
    </div>
    </li>
    <li>
    <div className="media-carousel" >
    <a className="thumbnail" href="http://68gate.com" target="_blank">
    <img src="https://cuoisml.com/uploads/banyeu.jpg" href="http://68gate.com"/>
    </a>
    <p><a href="http://68gate.com" target="_blank">Sở Hán Tranh Hùng</a></p>
    </div>
    </li>
    <li>
    <div className="media-carousel" >
    <a className="thumbnail" href="http://68gate.com" target="_blank">
    <img src="https://cuoisml.com/uploads/vothan2.jpg" href="http://68gate.com"/>
    </a>
    <p><a href="http://68gate.com" target="_blank">Bán Yêu Khuynh Thành</a></p>
    </div>
    </li>
    <li>
    <div className="media-carousel" >
    <a className="thumbnail" href="http://68gate.com" target="_blank">
    <img src="https://cuoisml.com/uploads/vothan2.jpg" href="http://68gate.com"/>
    </a>
    <p><a href="http://68gate.com" target="_blank">Bán Yêu Khuynh Thành</a></p>
    </div>
    </li>
</ul>
</div>
)
}
}
module.exports = Carousel;
