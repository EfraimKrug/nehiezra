import React from 'react';
import sefat_emet_np from './js/sefat_emet_np.js';
import ChassidicPiece from './ChassidicPiece.js';
import NPCassidusDropBox from './NPCassidusDropBox.js';

class Chassidus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {books:"", piece: props.piece};
    this.newTorah = this.newTorah.bind(this);
  }

  newTorah(val){
    this.props.newTorah(val);
    this.setState({piece:val});
  }

  loadAll(){
    let standIn = this;

    Promise.all([
      fetch("https://www.sefaria.org/api/texts/"+this.props.piece)
    ]).then(function (responses) {
      return Promise.all(responses.map(function (response) {
        return response.json();
      }));
    }).then(function (data) {
      standIn.setState({
        booksLoaded: true,
        piece:standIn.props.piece,
        books: data[0]
      });
    }).catch(function (error) {
      console.log(error);
    });

  }


  render(){
            this.loadAll();
            // console.log(this.state.piece);
            return (
              <div>
              <NPCassidusDropBox sefat_emet_np={sefat_emet_np} newTorah={this.newTorah}/>
              {this.state.books.he ? <ChassidicPiece text={this.state.books.he}
                                      piece={this.state.piece}
                                      sefat_emet_np={sefat_emet_np}/> : <div></div>}
              </div>
            )
        }
}

export default Chassidus;
