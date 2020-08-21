import React from 'react';

import Hasidicderashahasillumin from './js/hasidicderashahasillumin.js';
import Yearningforsacredplacewi from './js/yearningforsacredplacewi.js';
import Sealingthebookwithtearsd from './js/sealingthebookwithtearsd.js';
import Reviewofthebeshtmagician from './js/reviewofthebeshtmagician.js';
import Reviewoftherebbethelifea from './js/reviewoftherebbethelifea.js';
import Charismaticleadercharism from './js/charismaticleadercharism.js';
import Rebbetzinswonderchildren from './js/rebbetzinswonderchildren.js';
import Neohasidisminsuburbia    from './js/neohasidisminsuburbia.js';





class ShowText extends React.Component {
  constructor(props){
    super(props);
    this.hideText = this.hideText.bind(this);
    console.log(this.props.file);
    }

    getText(fileIn){
      let file = "";
      file = (fileIn === "hasidicderashahasillumin" ? <Hasidicderashahasillumin/>:"");
      if(!file)file = (fileIn === "yearningforsacredplacewi" ? <Yearningforsacredplacewi/>:"");
      if(!file)file = (fileIn === "sealingthebookwithtearsd" ? <Sealingthebookwithtearsd/>:"");
      if(!file)file = (fileIn === "reviewofthebeshtmagician" ? <Reviewofthebeshtmagician/>:"");
      if(!file)file = (fileIn === "reviewoftherebbethelifea" ? <Reviewoftherebbethelifea/>:"");
      if(!file)file = (fileIn === "charismaticleadercharism" ? <Charismaticleadercharism/>:"");
      if(!file)file = (fileIn === "rebbetzinswonderchildren" ? <Rebbetzinswonderchildren/>:"");
      if(!file)file = (fileIn === "neohasidisminsuburbia" ? <Neohasidisminsuburbia/>:"");

      return file;
    }

    hideText(){
        this.props.closeText();
    }

    render(){
      return (<div className="showText" onClick={this.hideText}>{ this.getText(this.props.file) }</div>);
    }
}

export default ShowText;
