import React from 'react';

class  PickLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentBook: ""};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    // let name = e.target.dataset.name;
    let picture = e.target.dataset.picture;
    // console.log(picture);
    this.props.func(picture);
    }

    render()
    {
        return (<div className="PickLine"
                      data-name={this.props.name}
                      data-picture={this.props.picture}
                      onClick={this.handleClick.bind(this)}>
            {this.props.name}
            <hr style={ {color:'tan'} }/>
        </div>);
    }
}

export default PickLine;
