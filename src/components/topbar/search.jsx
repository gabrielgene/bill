import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import qs from 'qs';
import { compose } from 'recompose';
import { withRouter } from 'react-router';
import { debounce } from  'lodash';
import { FormControl, Input, InputAdornment, Icon } from 'material-ui';

import { withSearchStyle } from './styles';

const DEBOUNCE_DELAY = 300;

class TopbarSearch extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      query: qs.parse(props.location.search).q || '',
    };
    this.search = debounce(this._search, DEBOUNCE_DELAY);
  }

  componentWillReceiveProps({ location }) {
    this.setState({
      query: qs.parse(location.search).q || '',
    });
  }

  handleChange(e) {
    this.setState({ query: e.target.value }, this.search);
  }

  _search() {
    const { location, history } = this.props;

    const path = this.state.query
      ? { pathname: '/search', search: `q=${this.state.query}` }
      : { pathname: '/' };

    const method = path.pathname !== location.pathname
      ? history.push
      : history.replace;

    method(path);
  }

  render() {
    return (
      <FormControl fullWidth>
        <Input
          onChange={this.handleChange}
          className={this.props.classes.root}
          placeholder="Pesquisar restaurante"
          value={this.state.query}
          disableUnderline
          endAdornment={
            <InputAdornment position="end">
              <Icon>search</Icon>
            </InputAdornment>
          }
        />
      </FormControl>
    );
  }
}

TopbarSearch.propTypes = {
  classes: PropTypes.object,
  history: PropTypes.object,
  location: PropTypes.object,
};

export default compose(
  withSearchStyle,
  withRouter,
)(TopbarSearch);
