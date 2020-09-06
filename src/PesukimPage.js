import React from 'react';
import PesukimForm from './PesukimForm.js';
import Perushim from './Perushim.js';
import PerushNotes from './PerushNotes.js';

class PesukimPage extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {sefer: 'Bereishit', chapter: '1', verse:'1'};
    this.state = {verse: '1'};
    this.handleVerseChange = this.handleVerseChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleVerseChange(event, force) {
    var ev = event;
    if(!force){
        ev = event.target.value;
    }
    this.setState({
          verse:ev
    })

    //propagate up to get new perush...
    this.props.handleVerseChange(ev,force);
  }


  render(){
      let firstVerse = this.props.verse > 2 ? this.props.verse - 3 : 0;
      let lastVerse = this.props.verse > this.props.pesukim.length - 3 ? this.props.pesukim.length : this.props.verse + 2;
      // console.log(this.props.perushNotes);
      return (
          <div className="PasukPage">
                    <PesukimForm
                          handleSeferChange={this.props.handleSeferChange}
                          handleChapterChange={this.props.handleChapterChange}
                          handleVerseChange={this.props.handleVerseChange}
                          versechange={this.handleVerseChange}
                          loadPesukim={this.props.loadPesukim}
                          nextPasuk={this.props.nextPasuk}
                          count={this.props.pesukim.length}
                          sefer={this.props.sefer}
                          chapter={this.props.chapter}
                          verse={this.props.verse}
                      />
                    <PerushNotes perushNotes={this.props.perushNotes} />
                    <Perushim perushim={this.props.perushim}
                              pesukim={this.props.pesukim.slice(firstVerse,lastVerse)}
                              verse={this.props.verse}
                              firstVerse={firstVerse}
                              perushNotes={this.props.perushNotes}
                    />
          </div>
        )
      }
}
export default PesukimPage;
