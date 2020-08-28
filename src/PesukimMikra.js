import React from 'react';

class PesukimMikra extends React.Component {
  render(){
            return (
              <div id="PesukimMikra"  className="PesukimSideTable">
              <ul className='heChapter'>
                {this.props.pesukim.map( (book, index) => (
                    <li key={index} className={"pasukim" + (index === (this.props.verse - 1) ? "red":"")}>
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
