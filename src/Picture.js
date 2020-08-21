import React from 'react';

class Picture extends React.Component {
    // console.log(this);
    render()
    {
        return (<div className="Picture">
                  <img className="Picture" src={`${process.env.PUBLIC_URL}` + "/" + this.props.src} alt={this.props.src.substring(this.props.src.lastIndexOf("/"))}/>
                </div>);
    }
}

export default Picture;
