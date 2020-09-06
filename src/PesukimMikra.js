import React from 'react';
import Pesuk from './Pesuk.js';

class PesukimMikra extends React.Component {
  render(){
            // console.log(this.props);
            return (
              <div id="PesukimMikra"  className="PesukimMikra">
              <ul className='heChapter'>
                {this.props.pesukim.map( (verse, index) => (
                    <li key={index} className={"pasukim" + (index + this.props.firstVerse === (this.props.verse - 1) ? "red":"")}>
                      <Pesuk pesuk={verse} perushNotes={this.props.perushNotes} target={index + this.props.firstVerse === (this.props.verse - 1)}/>
                    </li>
                  ))
                }
              </ul>
              </div>
            );
      }
}

export default PesukimMikra;
