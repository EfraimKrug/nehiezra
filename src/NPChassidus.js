import React from 'react';
//import sefat_emet_np from './js/sefat_emet_np.js';

class NPChassidus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {sefat_emet_np:this.props.sefat_emet_np,
                          piece:this.props.piece,
                          index:this.props.index,
                          torah:this.props.torah};
  }

  render(){
          let p = this.props.piece + ":" + this.props.index;
          // console.log(this.props.index);
          let cName = "Chassidus";
          let NPNote = "";
          for(let i=0; i < this.state.sefat_emet_np.sefat_emet_np.length; i++){
            // console.log(p);
            // console.log(this.state.sefat_emet_np.sefat_emet_np[i]);
            if(this.state.sefat_emet_np.sefat_emet_np[i].hasOwnProperty(p)){
              // console.log("and ...")
              if(this.state.sefat_emet_np.sefat_emet_np[i][p][0]){
                  cName = "ChassidusHL";
                  NPNote = this.state.sefat_emet_np.sefat_emet_np[i][p][1];
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
                        {this.state.torah}
                    </div>
                  );

            return (
                    <div className={cName}>
                        {this.state.torah}
                    </div>
                  )
        }
}

export default NPChassidus;
