const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema');

const app = express();

app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true
}));

module.exports = app;
