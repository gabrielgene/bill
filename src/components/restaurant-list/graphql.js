import gql from 'graphql-tag';

export const queryByCategory = gql`
  query RestaurantListByCategory($category: ID!) {
    restaurantCategory(id:$category) {
      name

      restaurants {
        id
        name
        flyerUrl
        address
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
      address
    }
  }
`;
