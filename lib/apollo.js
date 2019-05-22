import ApolloClient from 'apollo-boost'
import { API_URL, API_PORT, NODE_ENV } from 'react-native-dotenv'

const protocol = NODE_ENV === 'development' ? 'http' : 'https'
export default new ApolloClient({
  uri: `${protocol}://${API_URL}:${API_PORT}/graphql`
})
