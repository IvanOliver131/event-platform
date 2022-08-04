import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl6f70gk4234w01uh1q514vxd/master',
  cache: new InMemoryCache() // vai fazer o cache na memoria da aplicação
})