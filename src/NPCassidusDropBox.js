import React from 'react';


class NPCassidusDropBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {books:""};
  }


  render(){
    console.log(this.props.sefat_emet_np);
    let cName = "oRegular";

    const dropBoxAll = this.props.sefat_emet_np.sefat_emet_np.map(function(elt){
      let val = Object.keys(elt)[0].split(",");
      return <option value={Object.keys(elt)[0]} className={cName}>{val[2].replace("."," ").replace("_","")}</option>
    });

    const dropBox = this.props.sefat_emet_np.sefat_emet_np.map(function(elt){
      let val = Object.keys(elt)[0].split(",");
      if(elt[Object.keys(elt)[0]][1].length > 5)
        return <option value={Object.keys(elt)[0]} className={cName}>{val[2].replace("."," ").replace("_","")}</option>
      return null;
    });
            return (
              <div>
                <input className="formTableNP" type="text" placeholder="filter the dropbox"/>
                <br/>Suggested by Reb Nehemia...<br/>
                <select className="formTableNP">
                  {dropBoxAll}
                </select>
                <br/>Comments from Reb Nehemia...
                <br/><select className="formTableNP">
                  {dropBox}
                </select>
              </div>
            )
        }
}

export default NPCassidusDropBox;
