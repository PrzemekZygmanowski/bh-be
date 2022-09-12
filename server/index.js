import express from 'express';
import * as dotenv from 'dotenv';
import { graphqlHTTP } from 'express-graphql';
import colors from 'colors';
import cors from 'cors';
import schema from './schema/schema.js';
import connectDB from './config/db.js';

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

connectDB();

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({ schema, graphiql: process.env.NODE_ENV === 'development' })
);

app.listen(port, console.log(`hi i am listening on port ${port}`.green.bold));
