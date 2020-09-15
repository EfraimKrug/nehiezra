import React from 'react';
import sefat_emet from "./js/sefat_emet_json.js";
import Chassidus from './Chassidus.js'

function EltParsha(props){
    if(!props.data) return null;
    return props.data.parshalist.map(function(parsha,index){
        return <option key={index} value={parsha.parsha}>{parsha.parsha.replace(/_/g, " ")}</option>
    });
}

function EltPiece(props){
    if(!props.data) return null;
    return props.data.list.map(function(piece,index){
        return <option key={index} value={piece}>{piece}</option>
    });
}

class ChassidusPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {submitted: false,apicall:""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSefer = this.handleSefer.bind(this);
    this.handleParsha = this.handleParsha.bind(this);
    this.handlePiece = this.handlePiece.bind(this);
    this.newTorah = this.newTorah.bind(this);
  }

  newTorah(val){
    let citeValues = val.split(",");
    let parsha = citeValues[2].substring(0,citeValues[2].indexOf("."));

    var seferI = 0;
    for(let i=0; i < sefat_emet.sefat_emet.length; i++){
      if(sefat_emet.sefat_emet[i].sefer == citeValues[1]){
        seferI = i;
        break;
      }
    }

    let sefer = sefat_emet.sefat_emet[seferI];
    // console.log(sefer);
    var parshaI = 0;
    for(let i=0; i < sefer.parshalist.length; i++){
      if(sefer.parshalist[i].parsha == parsha){
        parshaI = i;
        break;
      }
    }

    this.setState({
      sefer:sefer,
      parsha:sefer.parshalist[parshaI],
      apicall:val
    });
  }

  handleSubmit(event) {
    if(event)event.preventDefault();
    this.setState({
      submitted: true,
      sefer:"",
      parsha:"",
      apicall:""
    });
  }

  handleSefer(event) {
    if(event)event.preventDefault();
    var idx = 0;
    for(let i=0; i < sefat_emet.sefat_emet.length; i++){
      if(sefat_emet.sefat_emet[i].sefer == event.target.value){
        idx = i;
        break;
      }
    }
    this.setState({
      submitted: true,
      sefer:sefat_emet.sefat_emet[idx],
      parsha:"",
      apicall:""
    });
  }

  handleParsha(event) {
    var idx = 0;
    if(event)event.preventDefault();
    for(let i=0; i < this.state.sefer.parshalist.length; i++){
      if(this.state.sefer.parshalist[i].parsha == event.target.value){
        idx = i;
        break;
      }
    }
    this.setState({
      submitted: true,
      parsha:this.state.sefer.parshalist[idx],
      apicall:""
    });
  }

  handlePiece(event) {
    // console.log(this.state);
    var idx = 0;
    if(event)event.preventDefault();
    this.setState({
      submitted: true,
        apicall:"Sefat_Emet,"+this.state.sefer.sefer+","+this.state.parsha.parsha+"."+event.target.value
    });
  }

  render(){
      return (
          <div><div className="ChassidusTitle">Sefat Emet: The Gerrer Rebbe</div>
            <form onSubmit={this.handleSubmit}>
            <table className="formTable">
            <tbody>
            <tr><td>Go Direct</td></tr>
            <tr><td><select tabIndex='0' onChange={this.handleSefer}>
            <option>Sefer</option>
                {
                  sefat_emet.sefat_emet.map(function(sefer,index){
                    return(<option key={index} value={sefer.sefer}>{sefer.sefer.replace("_","")}</option>)
                  })
                }
                </select>
                </td>
                </tr>
                <tr>
                <td><select tabIndex='1' onChange={this.handleParsha}>
                    <option>Parsha</option>
                    <EltParsha data={this.state.sefer}/>
                    </select>
                </td>
                </tr>
                <tr>
                <td><select tabIndex='2' onChange={this.handlePiece}>
                    <option>Section</option>
                    <EltPiece data={this.state.parsha}/>
                    </select>
                </td>
                </tr>
                </tbody>
                </table>
                </form>
              <Chassidus piece={this.state.apicall} newTorah={this.newTorah}/>
          </div>
        )
      }
}

export default ChassidusPage;
