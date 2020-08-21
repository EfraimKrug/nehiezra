import React from 'react';
import ShowText from './ShowText.js';

class ArticleName extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        isHover:false,
        isText:false
      };
      this.showHover = this.showHover.bind(this);
      this.hideHover = this.hideHover.bind(this);
      this.showText = this.showText.bind(this);
      this.hideText = this.hideText.bind(this);
      this.stateText = "";
      // this.isHover = this.isHover.bind(this);
    }

    showHover(){
      if(!this.state.isText)
        this.setState({
          isHover:true
        });
    }

    hideHover(){
        this.setState ({
          isHover:false
        });
    }

    showText(){
        if(this.stateText){
          this.stateText = false;
          return;
        }
        this.setState ({
          isText:true,
          isHover:false
        });
    }

    hideText(){
        this.setState ({
          isText:false,
          isHover:false
        });
        this.stateText = true;
    }

    render()
    {

        return (<td className={"ArticleName" + this.props.color}
                        onClick={this.showText}
                        onMouseEnter={this.showHover}
                        onMouseLeave={this.hideHover}>
        {this.props.articleName}
        {this.state.isHover ? <span className="hover">{this.props.info}</span> : ""}
        {this.state.isText  ? <ShowText file={this.props.articleName.replace(/[\s\W]/g,"").substring(0,24).toLowerCase()} closeText={this.hideText}/>:""}
        </td>);
    }
}


export default ArticleName;
