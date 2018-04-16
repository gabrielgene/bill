const env = (_var, _default) => (process.env[_var] || _default);

module.exports = {
  GRAPHQL_URI: env('REACT_APP_GRAPHQL_URI', 'http://localhost:4000/graphql'),
};
