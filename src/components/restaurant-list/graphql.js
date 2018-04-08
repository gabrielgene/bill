import gql from 'graphql-tag';

export const queryByCategory = gql`
  query RestaurantListByCategory($category: ID!) {
    category(id:$category) {
      name

      restaurants {
        id
        name
        flyerUrl
      }
    }
  }
`;

export const queryByTerm = gql`
  query RestaurantListByQuery($term: String!) {
    restaurants(query: $term) {
      id
      name
      flyerUrl
    }
  }
`;
