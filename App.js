import React from 'react'
import { ApolloProvider } from 'react-apollo'
import SearchBox from './components/SearchBox'
import client from './lib/apollo'

export default class App extends React.PureComponent {
  render() {
    return (
      <ApolloProvider client={client}>
        <SearchBox />
      </ApolloProvider>
    )
  }
}
