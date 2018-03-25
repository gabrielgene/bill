import React from 'react';
import Button from 'material-ui/Button';
import autoBind from 'react-autobind';

import SimpleModal from './modal';

class Home extends React.Component {

  constructor(props) {
    super(props);
    autoBind(this);

    this.state = {
      modalOpen: false,
    }
  }

  toggleModal() {
    this.setState({ modalOpen: !this.state.modalOpen })
  }

  render() {
    const { modalOpen } = this.state;

    return (
      <div style={{ textAlign: 'center' }}>
        <Button
          variant="raised"
          color="primary"
          size="large"
          style={{ height: '1000px', width: '1000px' }}
          onClick={this.toggleModal}
        >
          {this.state.modalOpen && 'Modal Aberto'}
        </Button>
        <SimpleModal
          // open={this.state.modalOpen}
          open
          onClose={this.toggleModal}
        />
      </div>
    );

  }
}



export default Home;
