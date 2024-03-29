import gql from 'graphql-tag';

export const queryByCategory = gql`
  query RestaurantListByCategory($category: ID!) {
    restaurantCategory(id:$category) {
      name

      restaurants {
        id
        name
        slug
        address
        flyer {
          src
        }
      }
    }
  }
`;

export const queryByTerm = gql`
  query RestaurantListByQuery($term: String!) {
    restaurants(query: $term) {
      id
      name
      slug
      address
      flyer {
        src
      }
    }
  }
`;
