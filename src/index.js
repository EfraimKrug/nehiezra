import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './fonts/ShlomoSemiStam.ttf';

//css
import './index.css';
//components
import TopMenu from './TopMenu.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

class TopLevel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {booksLoaded:false,
                  books:{},
                  perushim:{},
                  pesukimLoaded:false,
                  pesukim:{},
                  perushNotesLoaded:false,
                  perushNotes:{},
                  sefer:"Vayikra",
                  chapter:"4",
                  verse:"2",
                  firstload:true
                  };
    this.handleSeferChange = this.handleSeferChange.bind(this);
    this.handleChapterChange = this.handleChapterChange.bind(this);
    this.handleVerseChange = this.handleVerseChange.bind(this);
    this.loadAll = this.loadAll.bind(this);
    }

    handleSeferChange(event) {
      this.setState({
        sefer: event.target.value
      });
    }

    handleChapterChange(event) {
      this.setState({
        chapter: event.target.value
      });
    }

    handleVerseChange(val, force) {
      var func = function(){};
      if(force){
        func = function(){this.loadAll()}
      }
      let v = parseInt(val) ? parseInt(val) : '';
      this.setState({
        verse: v
      },func);
      // if(force) this.loadAll();
    }

    loadAll(){
      let standIn = this;
      Promise.all([
        fetch("https://www.namethatthing.site/cgi-bin/npolen/NPBooksAPI.php"),
        fetch("https://www.namethatthing.site/cgi-bin/npolen/NPPerushNotesAPI.php"),
        fetch("https://www.sefaria.org/api/texts/" + standIn.state.sefer + "." + standIn.state.chapter),
        fetch("https://www.sefaria.org/api/texts/" + standIn.state.sefer + "." + standIn.state.chapter + "." + standIn.state.verse + "?commentary=1&context=0" )
      ]).then(function (responses) {
        return Promise.all(responses.map(function (response) {
          return response.json();
        }));
      }).then(function (data) {
        // console.log( data );
        standIn.setState({
          booksLoaded: true,
          books: data[0]
        });
        standIn.setState({
          perushNotesLoaded: true,
          perushNotes: data[1]
        });
        standIn.setState({
          pesukimLoaded: true,
          pesukim: data[2]['he']
        });
        standIn.setState({
          isLoaded: true,
          perushim: data[3]
        });
      }).catch(function (error) {
        console.log(error);
      });

    }

    componentDidMount() {
      this.loadAll();
    }

    render()
    {
        if(Object.keys(this.state.books).length
          && Object.keys(this.state.pesukim).length
          && Object.keys(this.state.perushNotes).length
          && Object.keys(this.state.perushim).length){
            // console.log(this.state.perushNotes);
            // console.log(this.state.perushim.commentary);
            return (<div className="TopLevel">
                <TopMenu books={this.state.books}
                         pesukim={this.state.pesukim}
                         handleSeferChange={this.handleSeferChange}
                         handleChapterChange={this.handleChapterChange}
                         handleVerseChange={this.handleVerseChange}
                         loadPesukim={this.loadAll}
                         nextPasuk={this.nextPasuk}
                         perushNotes={this.state.perushNotes.body.filter(perush => perush.sefer === this.state.sefer && perush.chapter == this.state.chapter && perush.verse == this.state.verse)}
                         perushim={this.state.perushim.commentary.filter(perush => perush.sourceRef.indexOf(this.state.chapter + ":" + this.state.verse) > -1)}
                         sefer={this.state.sefer}
                         chapter={this.state.chapter}
                         verse={this.state.verse}
                         />
                </div>);
          }
        return null;
    }
}


ReactDOM.render(
  <TopLevel firstrender={true} />,
  document.getElementById('root')
);
