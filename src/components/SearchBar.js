import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { terms: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
        {console.log(`You searched: ${this.state.term}`)}
      </div>
    )
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
