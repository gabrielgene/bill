import gql from 'graphql-tag';

export const queryGetCategories = gql`
  query RestaurantCategories {
    restaurantCategories {
      id
    }
  }
`;
