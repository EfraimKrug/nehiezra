import React from 'react';

class PesukimForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {sefer: 'Bereishit', perush: 'RamBan', chapter: '1', verse:'1'};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nextVerse = this.nextVerse.bind(this);
    this.preVerse = this.preVerse.bind(this);
  }

    nextVerse(){
      let verseInput = document.getElementById("verseInput");
      //temporary guard
      if(verseInput.value > this.props.count-1) return;
      verseInput.value = parseInt(verseInput.value) + 1;
      //count should be the number of pesukim in the chapter...
      //logic for next chapter goes here...
      this.props.versechange(verseInput.value, true);
      this.handleSubmit();
    }

    preVerse(){
      let verseInput = document.getElementById("verseInput");
      //temporary guard
      if(verseInput.value < 2) return;
      verseInput.value = parseInt(verseInput.value) - 1;
      //i need logic for previous chapter here...
      this.props.versechange(verseInput.value, true);
      this.handleSubmit();
    }

    handleSubmit(event) {
      if(event)event.preventDefault();
      this.setState({
        submitted: true
      });
      this.props.loadPesukim();
    }

    render(){
        return (
          <form onSubmit={this.handleSubmit}>
          <table className="formTable">
          <tbody>
          <tr><td>Sefer</td>
          <td><select defaultValue={this.props.sefer} onChange={this.props.handleSeferChange}>
                <option value="Bereishit">Bereishit</option>
                <option value="Shemot">Shemot</option>
                <option value="Vayikra">Vayikra</option>
                <option value="Bamidbar">Bamidbar</option>
                <option value="Devarim">Devarim</option>
                <option value="Joshua">Joshua</option>
                <option value="Judges">Judges</option>
                <option value="I Samuel">Samuel I</option>
                <option value="II Samuel">Samuel II</option>
                <option value="I Kings">Kings I</option>
                <option value="II Kings">Kings II</option>
                <option value="Isaiah">Isaiah</option>
                <option value="Jeremiah">Jeremiah</option>
                <option value="Ezekiel">Ezekiel</option>
                <option value="Hoshea">Hoshea</option>
                <option value="Yoel">Yoel</option>
                <option value="Amos">Amos</option>
                <option value="Obadiah">Obadiah</option>
                <option value="Yonah">Yonah</option>
                <option value="Micah">Micah</option>
                <option value="Nahum">Nahum</option>
                <option value="Habakkuk">Habakkuk</option>
                <option value="Zephaniah">Zephaniah</option>
                <option value="Chagai">Chagai</option>
                <option value="Zachariah">Zachariah</option>
                <option value="Malachi">Malachi</option>
                <option value="Tehilim">Tehilim</option>
                <option value="Mishlei">Mishlei</option>
                <option value="Iyov">Iyov</option>
                <option value="Shir HaShirim">Shir HaShirim</option>
                <option value="Rut">Rut</option>
                <option value="Eicha">Eicha</option>
                <option value="Ecclesiastes">Kohelet</option>
                <option value="Esther">Esther</option>
                <option value="Daniel">Daniel</option>
                <option value="Ezra">Ezra</option>
                <option value="Nehemiah">Nehemiah</option>
                <option value="I Chronicles">Divrei Hayamim I</option>
                <option value="II Chronicles">Divrei Hayamim II</option>
              </select>
          </td>
          <td>
          <button type="button" className="PrevButton" onClick={this.preVerse}>Prev</button>
          </td>
          </tr>
          <tr><td>Chapter</td>
          <td><input type="text" className="formInput" value={this.props.chapter} onChange={this.props.handleChapterChange}/>
          </td>
          <td>
          <button type="button" className="NextButton" onClick={this.nextVerse}>Next</button>
          </td>
          </tr>
          <tr><td>Verse</td>
          <td><input type="text" id="verseInput" className="formInput" value={this.props.verse} onChange={this.props.versechange}/>
          </td>
          </tr>
          <tr><td></td><td>
            <input type="submit" value="Submit" />
            </td></tr>
            </tbody>
            </table>
          </form>
        )}
  }

export default PesukimForm;
