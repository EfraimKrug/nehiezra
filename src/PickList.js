import React from 'react';
import PickLine from "./PickLine.js";
// import Picture from "./Picture.js";


class PickList extends React.Component {

    render() {
        return (
          <div className="PickList">
          { this.props.data.body.map(function(p){
                  return(
                    <div>
                    <PickLine
                        key={p.key}
                        name={p.title}
                        picture={p.picture}
                        func={this.props.func}
                        />
                    </div>
                  )
                }.bind(this))
          }
          </div>
      );
    }
}


export default PickList;
