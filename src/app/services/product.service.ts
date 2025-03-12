import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// ✅ GraphQL Query to Fetch All Products
const GET_PRODUCTS = gql`
  query {
    products {
      id
      title
      price
      description
      images
      category {
        id
        name
        image
      }
    }
  }
`;

// ✅ GraphQL Query to Fetch a Single Product by ID
const GET_PRODUCT_BY_ID = gql`
  query GetProduct($id: ID!) {
    product(id: $id) {
      id
      title
      price
      description
      images
      category {
        id
        name
        image
      }
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private apollo: Apollo) {}

  // ✅ Fetch All Products
  getProducts(): Observable<any[]> {
    return this.apollo
      .watchQuery<{ products: any[] }>({
        query: GET_PRODUCTS,
      })
      .valueChanges.pipe(map((result) => result.data.products));
  }

  // ✅ Fetch Single Product by ID
  getProductById(id: string): Observable<any> {
    return this.apollo
      .watchQuery<{ product: any }>({
        query: GET_PRODUCT_BY_ID,
        variables: { id }, // Pass the ID as a variable
      })
      .valueChanges.pipe(map((result) => result.data.product));
  }
}



// import { Injectable } from '@angular/core';
// import { Apollo, gql } from 'apollo-angular';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

// const GET_PRODUCTS = gql`
//   query {
//     products {
//       id
//       title
//       price
//       description
//       images
//       category {
//         id
//         name
//         image
//       }
//     }
//   }
// `;

// @Injectable({
//   providedIn: 'root',
// })
// export class ProductsService {
//   constructor(private apollo: Apollo) {}

//   getProducts(): Observable<any[]> {
//     return this.apollo
//       .watchQuery<{ products: any[] }>({
//         query: GET_PRODUCTS,
//       })
//       .valueChanges.pipe(map((result) => result.data.products));
//   }
// }
