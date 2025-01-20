import {ApolloServer, gql} from "apollo-server"
import {ApolloServerPluginLandingPageGraphQLPlayground} from "apollo-server-core"
import {users, quotes} from './fakedb.js'

// Schema :
const typeDefs = gql`
type Query {
    users:[User]
    user(id:String!):User
    quotes:[Quote]
    iquote(author: String!):[Quote]
}

type User {
    id: String!
    firstname: String
    lastname: String
    email: String
    phone: String
    password: String,
    quotes:[Quote]
}

type Quote {
    id: String! 
    author: String
    content: String
}
` //  "dynamic templates" or "dedicated template literals"


// Query resolver:
const resolvers = {
    Query:{
        users: () => users,
        user: (_, {id}) => users.find(user=>user.id == id),  // resolver function to fetch user by id
        quotes: () => quotes,
        iquote: (_, {author}) => quotes.filter(quote=>quote.author == author)
    },
    User:{
        quotes: (user) =>quotes.filter(quote=>quote.author == user.id) 
    }
}

// Apollo Server setup:
const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
})

// Start the server: nodemon server
// install nodemon : npm install -g nodemon

// Specify Custom Port:
const PORT = 5000; // Change to your desired port

server.listen({ port: PORT }).then(({ url }) => {
    console.log(`Server ready at ${url}`);
});