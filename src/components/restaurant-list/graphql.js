import gql from 'graphql-tag';

export const queryByCategory = gql`
  query RestaurantListByCategory($category: ID!) {
    category(id:$category) {
      name

      restaurants {
        name
        flyerUrl
      }
    }
  }
`;

