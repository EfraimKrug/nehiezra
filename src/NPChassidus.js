import React from 'react';
import sefat_emet_np from './js/sefat_emet_np.js';

class NPChassidus extends React.Component {

  render(){
          let p = this.props.piece + ":" + this.props.index;
          let cName = "Chassidus";
          let NPNote = "";
          for(let i=0; i < sefat_emet_np.sefat_emet_np.length; i++){
            if(sefat_emet_np.sefat_emet_np[i].hasOwnProperty(p)){
              if(sefat_emet_np.sefat_emet_np[i][p][0]){
                  cName = "ChassidusHL";
                  NPNote = sefat_emet_np.sefat_emet_np[i][p][1];
                }
              break;
            }
          }

          if(cName == "ChassidusHL" || NPNote.length > 5)
            return (
                    <div className={cName}>
                      <div className="NPChassidus">
                        {NPNote}
                      </div>
                        {this.props.torah}
                    </div>
                  );

            return (
                    <div className={cName}>
                        {this.props.torah}
                    </div>
                  )
        }
}

export default NPChassidus;
