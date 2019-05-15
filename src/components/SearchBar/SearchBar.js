import React, { Component } from 'react';
import {
  Input
} from 'reactstrap';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ''
    }
    this.timer = '';
  }

  async handleSearch(e) {
    const { searchFeeds } = this.props;
    await this.setState({
      searchInput: e.target.value,
    });

    const { searchInput} = this.state;
    if(this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      searchFeeds(searchInput);
    }, 500);
  }

  render() {
    const { searchInput } = this.state;
    return (
      <div className='width-100pc'>
        <Input
          name='search'
          type='text'
          value={searchInput}
          onChange={(e) => this.handleSearch(e)}
          placeholder='Search feeds...' />
      </div>
    )
  }
};

export default SearchBar;