import { ApplicationConfig, inject } from '@angular/core';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';

const uri = 'https://api.escuelajs.co/graphql'; // Replace with your GraphQL server URL

export function apolloOptionsFactory(): ApolloClientOptions<any> {
  const httpLink = inject(HttpLink);
  return {
    link: httpLink.create({ uri }),
    cache: new InMemoryCache(),
  };
}

export const graphqlConfig: ApplicationConfig['providers'] = [
  Apollo,
  {
    provide: APOLLO_OPTIONS,
    useFactory: apolloOptionsFactory,
  },
];
