import React from 'react';

class PerushName extends React.Component {
    // console.log(this);
    render()
    {
      // console.log(this.props);
        if(this.props.perushname !== this.props.lastperushname){
          return (<span className="PerushName">{this.props.perushname}</span>);
        }
        return (<span className="PerushName"><hr/></span>);
    }
}

export default PerushName;
