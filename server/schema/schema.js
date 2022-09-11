import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';
import { User } from '../models/User.js';

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    firstName: {
      type: GraphQLString,
    },
    lastName: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return User.find();
      },
    },
    user: {
      type: UserType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve(parent, args) {
        return User.findById(args.id);
      },
    },
  }),
});
const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        firstName: {
          type: new GraphQLNonNull(GraphQLString),
        },
        lastName: {
          type: new GraphQLNonNull(GraphQLString),
        },
        email: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve(parent, args) {
        const user = new User({
          firstName: args.firstName,
          lastName: args.lastName,
          email: args.email,
        });
        return user.save();
      },
    },
  },
});

export default new GraphQLSchema({ query: RootQuery, mutation });
