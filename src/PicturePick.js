import React from 'react';

class PicturePick extends React.Component {
    render()
    {
        return (<div className="PicturePick">
                  <img src={this.props.src} alt={this.props.src.substring(this.props.src.lastIndexOf("/"))}/>
                </div>);
    }
}

export default PicturePick;
