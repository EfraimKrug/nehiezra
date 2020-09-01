import React from 'react';

class PerushName extends React.Component {
    // console.log(this);
    render()
    {
      // console.log(this.props);
        if(this.props.perushname !== this.props.lastperushname){
          return (<p className="PerushName">{this.props.perushname}</p>);
        }
        return (<p className="PerushName"></p>);
    }
}

export default PerushName;
