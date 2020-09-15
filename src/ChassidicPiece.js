import React from 'react';
import NPChassidus from './NPChassidus.js';

class ChassidicPiece extends React.Component {
  constructor(props) {
    super(props);
    this.state = {books:"",
                  piece:props.piece,
                  sefat_emet_np:this.props.sefat_emet_np
                };
  }

  render(){
            // console.log("ChassidicPiece");
            let piece = this.props.piece;
            // console.log(piece);
            let sefat_emet_np = this.props.sefat_emet_np;
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
                            <NPChassidus  piece={piece}
                                          index={index-offset}
                                          torah={torah}
                                          sefat_emet_np={sefat_emet_np}/>
                           </div>
                  })
                }
              </div>
            )
        }
}

export default ChassidicPiece;
