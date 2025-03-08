import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private apollo: Apollo) {}

  getProducts(): Observable<any[]> {
    return this.apollo
      .watchQuery<{ products: any[] }>({
        query: GET_PRODUCTS,
      })
      .valueChanges.pipe(map((result) => result.data.products));
  }
}
