import React, { PureComponent, PropTypes } from 'react';
import VirtualList from 'react-virtual-list';
import {connect} from 'react-redux';
const ConfigurableExample = (MyList) => {
  return class MyConfigurableList extends PureComponent {
    constructor(props) {
      super(props);
      const defaultItemCount = 100000;
      const result =[];
      const state = {
        itemHeight: 100,
        itemCount: defaultItemCount,
        items: [{id:1,title:"duloc"}],
        contained: false,
        containerHeight: 250,
        itemBuffer: 0,
        type_article:"bca",
      };
      this.state = state;
      this.MyVirtualList =VirtualList()(MyList);
    };
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
    render() {
      const MyVirtualList = (this.MyVirtualList);
      var dtArticle = this.state.result
      this.setState({items : dtArticle});
      return (
        <MyVirtualList
          items={this.state.items}
          itemBuffer={50}
          itemHeight={300}
        />
      );
    };
  };
};

export default ConfigurableExample;
