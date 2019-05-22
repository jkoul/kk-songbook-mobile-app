import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import SearchBox from './components/SearchBox'

const client = new ApolloClient({
  uri: 'http://192.168.1.177:3010/graphql'
})

export default class App extends React.PureComponent {
  render() {
    return (
      <ApolloProvider client={client}>
        <SearchBox />
      </ApolloProvider>
    )
  }
}
