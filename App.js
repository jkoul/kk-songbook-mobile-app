import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { StyleSheet, Text, View } from 'react-native'

const client = new ApolloClient({
  uri: 'http://localhost:3010/graphql'
})

export default class App extends React.PureComponent {
  render() {
    return (
      <ApolloProvider client={client}>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </ApolloProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
