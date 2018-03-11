import React from 'react';
import autoBind from 'auto-bind';
import TopBar from '../../../components/topbar';
import BottomBar from '../../../components/bottom-bar';
import TableList from '../../../components/table-list';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'ALL',
    };
    autoBind(this);
  }

  handleFilter(filter) {
    this.setState({ filter });
  }

  render() {
    const { filter } = this.state;

    return (
      <div>
        <TopBar title="Mesas" filter={this.handleFilter} filtered />
        <TableList filteredBy={filter} />
        <BottomBar />
      </div>
    );
  }
}

export default Home;
