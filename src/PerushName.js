import React from 'react';

class PerushName extends React.Component {
    // console.log(this);
    render()
    {
        return (<span className="PerushName">{this.props.perushname}</span>);
    }
}

export default PerushName;
