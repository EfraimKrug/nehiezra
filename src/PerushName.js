import React from 'react';

class PerushName extends React.Component {
    // console.log(this);
    render()
    {
      // console.log(this.props);
        if(this.props.perushname !== this.props.lastperushname){
          return (<div className="PerushName">{this.props.perushname}</div>);
        }
        return (<div className="PerushName"><hr/></div>);
    }
}

export default PerushName;
