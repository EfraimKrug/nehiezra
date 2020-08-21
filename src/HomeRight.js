import React from 'react';
import PickList from "./PickList.js";
import PicturePick from "./PicturePick.js";


class HomeRight extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {};
    this.state.picture = "TheHolyFire.jpg";
  }


  handleChange(val){
    this.setState(state => ({
      picture: val
      })
    );
  }

  render(){
          return (<td className="HomeRight">
              <PickList data={this.props.books}  func={this.handleChange} />
              <PicturePick src={this.state.picture} />
              </td>);
      }
}

export default HomeRight;
