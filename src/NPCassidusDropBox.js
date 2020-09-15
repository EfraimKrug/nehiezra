import React from 'react';


class NPCassidusDropBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {search:null};
    this.searchSpace = this.searchSpace.bind(this);
    this.newTorah = this.newTorah.bind(this);
  }

  newTorah(event){
    this.props.newTorah(event.target.value.substring(0,event.target.value.lastIndexOf(":")));
  }

  searchSpace(event){
      let keyword = event.target.value;
      this.setState({search:keyword})
  }

  render(){
            let cName = "oRegular";
            let keyword = this.state.search;
            // alert(keyword);
            const dropBoxAll = this.props.sefat_emet_np.sefat_emet_np.map(function(elt, index){
              let val = Object.keys(elt)[0].split(",");
              let comment = elt[Object.keys(elt)[0]][1];

              if(!keyword){
                  return <option  key={index} value={Object.keys(elt)[0]}
                                  className={cName}>{val[2].replace("."," ").replaceAll("_"," ")}
                                  </option>
              }
              if(Object.keys(elt)[0].toLowerCase().includes(keyword.toLowerCase()) || comment.toLowerCase().includes(keyword.toLowerCase())){
                  return <option  key={index} value={Object.keys(elt)[0]}
                                  className={cName}>{val[2].replace("."," ").replaceAll("_"," ")}
                                  </option>
              }
              return null;
            });

            const dropBox = this.props.sefat_emet_np.sefat_emet_np.map(function(elt,index){
              let val = Object.keys(elt)[0].split(",");
              let comment = elt[Object.keys(elt)[0]][1];

              if(elt[Object.keys(elt)[0]][1].length < 5) return null;

              if(!keyword){
                  return <option  key={index} value={Object.keys(elt)[0]}
                                  className={cName}>{val[2].replace("."," ").replaceAll("_"," ")}
                                  </option>
              }
              if(Object.keys(elt)[0].toLowerCase().includes(keyword.toLowerCase()) || comment.toLowerCase().includes(keyword.toLowerCase())){
                  return <option  key={index} value={Object.keys(elt)[0]}
                                  className={cName}>{val[2].replace("."," ").replaceAll("_"," ")}
                                  </option>
              }
              return null;
            });

            return (
              <table className="formTableNP"><tr>
                <td cols="2"><input className="formTableNPTop" type="text" placeholder="filter the dropbox" onChange={this.searchSpace}/></td>
                </tr><tr>
                <td className="formTableNPLabel"> Suggested </td>
                <td><select className="formTableNP" onChange={this.newTorah}>
                  {dropBoxAll}
                </select>
                </td></tr>
                <tr>
                <td className="formTableNPLabel"> Commented </td>
                <td><select className="formTableNP" onChange={this.newTorah}>
                  {dropBox}
                </select>
                </td></tr>
              </table>
            )
        }
}

export default NPCassidusDropBox;
