import React from 'react';

class SearchBar extends React.Component {
    constructor(props){
      super(props);
      this.filterText=this.props.filterText;
      this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleTextChange(e){
      this.props.onFilterText(e.target.value);
    }

    render(){
        return (
          <div>
          <label>Filter Titles</label>
          <form className="SearchBarForm">
            <input
              type="text"
              placeholder="Check it out..."
              value={this.props.filterText}
              onChange={this.handleTextChange}
            />
          </form>
          </div>
        );
      }
}

export default SearchBar;
