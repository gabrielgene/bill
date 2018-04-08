import gql from 'graphql-tag';

export const query = gql`
  query RestaurantView($restaurantSlug: String!) {
    restaurant(slug:$restaurantSlug)  {
      name
      slug
      description
      flyerUrl
      categories {
        name
      }
      itemCategories {
        name
      }
      items {
        name
        description
        price
      }
    }
  }
`;
