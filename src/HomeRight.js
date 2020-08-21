import React from 'react';
import PickList from "./PickList.js";
import PicturePick from "./PicturePick.js";

import TheHolyFire from './images/TheHolyFire.jpg';
import TheRebbesDaughter from './images/TheRebbesDaughter.jpg';
import BeRonYahad from './images/BeRonYahad.jpeg';
import TiberiasWithLove from './images/TiberiasWithLove.jpeg';
import LogoKorenComingSoon from './images/LogoKorenComingSoon.jpg';

let BookData = {
  TheHolyFire:TheHolyFire,
  TheRebbesDaughter:TheRebbesDaughter,
  BeRonYahad:BeRonYahad,
  TiberiasWithLove:TiberiasWithLove,
  LogoKorenComingSoon:LogoKorenComingSoon
}

class HomeRight extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {};
    this.state.picture = TheHolyFire;
  }


  handleChange(val){
    this.setState(state => ({
      picture: BookData[val.substring(0,val.indexOf('.'))]
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
