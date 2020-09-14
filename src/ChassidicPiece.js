import React from 'react';
import sefat_emet_np from './js/sefat_emet_np.js';
import NPChassidus from './NPChassidus.js';
import NPCassidusDropBox from './NPCassidusDropBox.js';

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
                            <NPCassidusDropBox  sefat_emet_np={sefat_emet_np}/>
                            <NPChassidus piece={piece} index={index-offset} torah={torah} sefat_emet_np={sefat_emet_np}/>
                           </div>
                  })
                }
              </div>
            )
        }
}

export default ChassidicPiece;
