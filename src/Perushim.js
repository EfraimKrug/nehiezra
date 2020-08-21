import React from 'react';
import PerushName from './PerushName.js';

let commentary = ['Rashi','Ramban','Ibn Ezra','Onkelos','Rashbam','Sforno','Kli Yakar','Or HaChaim','Targum Jonathan','Tur HaAroch','Penei David','Metzudat Zion'];

class Perushim extends React.Component {
    // console.log(this);
    render()
    {
        // console.log(this.props.perushim);
        return (<table><tbody>
                {this.props.perushim.map(function(perush,index){
                        let line = perush['he'].toString();
                        line = line.replace(/<(.+?)>/g,"");
                        let flag = false;
                        let thisCommentary = "";
                        for (let i=0; i<commentary.length; i++){
                          if (perush['index_title'].indexOf(commentary[i]) > -1){
                            thisCommentary = commentary[i];
                            flag=true;
                          }
                        }
                        if(flag)
                          return (<tr key={index}><td><PerushName perushname={thisCommentary}/><span className="PerushHe">{line.trim().substring(0,line.length-1)}</span></td></tr>)
                        else return null
                        })}
                </tbody></table>);
    }
}

export default Perushim;
