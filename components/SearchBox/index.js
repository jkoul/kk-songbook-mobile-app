import React from 'react'
import gql from 'graphql-tag'
import { graphql, withApollo } from 'react-apollo'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const SONGS_QUERY = gql`
  query {
    songs(sort: {
      field: "song",
      order: 1
    }) {
      _id
      artist
    }
  }
`

const SearchBox = ({ data }) => {
  const { loading, error } = data
  let text = 'Success!!'
  if (loading) {
    text = 'Loading...'
  } else if (error) {
    text = 'An error occurred'
  }
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
    </View>
  )
}

export default withApollo(graphql(SONGS_QUERY, {
  props: ({ data }) => ({
    data
  })
})(SearchBox))
