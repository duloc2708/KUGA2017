import React from 'react';

class Listdata extends React.Component{
 //  // Constructor is responsible for setting up props and setting initial stte
 // constructor(props){
 //     // Pass props to the parent component
 //     super(props);
 //     // Set initial state
 //     this.state = {
 //         // State needed
 //         cars: []
 //     };
 // }
 //
 // componentDidMount(){
 //     // Static data
 //     const data = [
 //         {
 //             id: 1,
 //             name: 'Honda Accord Crosstour',
 //             year: '2010',
 //             model: 'Accord Crosstour',
 //             make: 'Honda',
 //             media: 'http://media.ed.edmunds-media.com/honda/accord-crosstour/2010/oem/2010_honda_accord-crosstour_4dr-hatchback_ex-l_fq_oem_4_500.jpg',
 //             price: '$16,811'
 //
 //         },
 //         {
 //             id: 2,
 //             name: 'Mercedes-Benz AMG GT Coupe',
 //             year: '2016',
 //             model: 'AMG',
 //             make: 'Mercedes Benz',
 //             media: 'http://media.ed.edmunds-media.com/mercedes-benz/amg-gt/2016/oem/2016_mercedes-benz_amg-gt_coupe_s_fq_oem_1_717.jpg',
 //             price: '$138,157'
 //
 //         }
 //     ];
 //     // Update state
 //     this.setState({cars: data});
 // }

 render(){
   const cars = this.props.route.data;

     // Map through cars and return linked cars
     const carNode = cars.map((car) => {
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
     });
     return (
         <div className="listdata">
             <h1>Cars page</h1>
             <div className="list-group">
                 {carNode}
             </div>
         </div>
     );
 }
}

module.exports = Listdata;
