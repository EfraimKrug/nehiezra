import React from 'react';
import NPChassidus from './NPChassidus.js';

class ChassidicPiece extends React.Component {
  constructor(props) {
    super(props);
    this.state = {books:""};
  }

  render(){
            // console.log(this.props.piece);
            let piece = this.props.piece;
            let offset = -1;
            return (
              <div>
                {
                  this.props.text.map(function(torah,index){
                    if(torah.length < 20){
                      offset++;
                      return null;
                    }
                    return <div key={index} className="ChassidusBox">
                            <NPChassidus piece={piece} index={index-offset} torah={torah}/>
                           </div>
                  })
                }
              </div>
            )
        }
}

export default ChassidicPiece;
