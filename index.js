import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req,res) => {
    res.send('GraphQL - up and running');
});

const root = {hello : () => "Hi this is for Amrendra's learning"};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql : true

}));

app.listen(8080, () => console.log('Runnnig graphql on server port : 8080'));
