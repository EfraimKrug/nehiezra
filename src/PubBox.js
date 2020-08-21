import React from 'react';
import SearchBar from './SearchBar.js';

import articleList from './pdfList1.js';
import PubList from './PubList.js';

class PubBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          filterText:''
        };
      this.handleFilterText = this.handleFilterText.bind(this);
    }

    handleFilterText(filterText){
        this.setState({
          filterText:filterText
        });
    }

    render()
    {
        return(
        <div className="Wrapper">
        Here is a list of articles Reb Nehemia has written.
        <div className="PubBox">
        <SearchBar
          filterText={this.state.filterText}
          onFilterText={this.handleFilterText}
        />
        <PubList
          filterText={this.state.filterText}
          articleList={articleList}
        />
        </div>
        </div>
      );
    }
}

export default PubBox;
