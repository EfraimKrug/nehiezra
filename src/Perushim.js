import React from 'react';
import PesukimMikra from './PesukimMikra.js';
import PerushName from './PerushName.js';

let commentary = ['Rashi','Ramban','Ibn Ezra','Onkelos','Rashbam','Sforno','Kli Yakar','Or HaChaim','Targum Jonathan','Tur HaAroch','Penei David','Metzudat Zion'];

class Perushim extends React.Component {
    // console.log(this);
    render()
    {
        // console.log(this.props.perushim);
        let lastCommentary = "";
        return (<div className="bigger">
                <PesukimMikra pesukim={this.props.pesukim} verse={this.props.verse} firstVerse={this.props.firstVerse}/>
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
                        if(flag){
                          let holdCommentary = lastCommentary;
                          lastCommentary = thisCommentary;
                          return (<p className="Commentary" key={index}><PerushName perushname={thisCommentary} lastperushname={holdCommentary}/><br/><br/><p className="PerushHe">{line.trim().substring(0,line.length-1)}</p></p>)
                        }
                        else return null
                        })}
                </div>);
    }
}

export default Perushim;
