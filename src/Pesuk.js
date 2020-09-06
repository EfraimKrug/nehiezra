import React from 'react';
// returing this works: <span>{this.props.pesuk}</span>
function checkMatch(index, arr){
  for(let i=0; i<arr.length;i++){
    // console.log([index,arr[i]]);
    if(index == arr[i]) return true;
  }
  return false;
}

function analyzePerush(perush){
  var highlightArray = [];
  var mark = "";
  var type = "";
  var types = ["Circled","Green","Red","Blue"];
      for(var i=0; i<types.length;i++){
        if(perush.indexOf(types[i]) > -1){
          let mark = perush.indexOf(types[i]);
          type = types[i];
          break;
        }
      }

  let start = perush.indexOf("[",mark);
  let end = perush.indexOf("]",mark);
  let str = perush.substring(start+1,end);
  highlightArray = str.split(",");
  for(let j = 0; j < highlightArray.length;j++){
    highlightArray[j] = (parseInt(highlightArray[j]) - 1)+"";
  }
  // console.log(highlightArray);
  // console.log({highlightArray:highlightArray,type:type});
  return {highlightArray:highlightArray,type:type};
}

class Pesuk extends React.Component {
  render(){
            let target = this.props.target;
            var retObj = {};
            var highlightArray = [];
            var type = "";
            let wordArray = this.props.pesuk.split(" ");
            for(let i = 0; i < this.props.perushNotes.length; i++){
              retObj = analyzePerush(this.props.perushNotes[i].note);
              if(retObj.type){
                highlightArray = retObj.highlightArray;
                type = retObj.type;
                break;
              }
            }

            return (
              wordArray.map(function(word,index){
                if(checkMatch(index,highlightArray) && target) return <span className={type+"Word"}>{word} </span>;
                return <span>{word} </span>;
              })
            );
      }
}

export default Pesuk;
