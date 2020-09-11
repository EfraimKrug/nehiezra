import React from 'react';
import ChassidicPiece from './ChassidicPiece.js';

class Chassidus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {books:""};
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
      // console.log("Loading... Baby")
      // console.log( data );
      standIn.setState({
        booksLoaded: true,
        books: data[0]
      });
    }).catch(function (error) {
      console.log(error);
    });

  }


  render(){
            this.loadAll();
            return (
              this.state.books.he ? <ChassidicPiece text={this.state.books.he} piece={this.props.piece}/> : <div></div>
            )
        }
}

export default Chassidus;
