import React from 'react';

class PesukimMikra extends React.Component {
  render(){
            // console.log(this.props.pesukim);
            return (
              <div id="PesukimMikra"  className="PesukimMikra">
              <ul className='heChapter'>
                {this.props.pesukim.map( (book, index) => (
                    <li key={index} className={"pasukim" + (index + this.props.firstVerse === (this.props.verse - 1) ? "red":"")}>
                      {book}
                    </li>
                  ))
                }
              </ul>
              </div>
            );
      }
}

export default PesukimMikra;
