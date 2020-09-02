import React from 'react';

function SetPDF(){
    var PDFFrame = document.getElementById("PDFFrame");
    PDFFrame.style.width = window.innerWidth + "px";
    PDFFrame.style.height = window.innerHeight + "px";
    return null;
}

class Article extends React.Component {
  render(){
      return (
        <div>
        <embed id="PDFFrame" src={this.props.namePDF} className="embedPDF" onLoad={SetPDF} />
        </div>
        )
      }
}

export default Article;
