# Introduction

This project is supposed to present a simple form with the following fields:
-First Name
-Last Name
-Email
-Date

## Launching The Project

To run the project, you need to follow these steps:

### `install depedencies - yarn`

### `complete environmental data`

in order for the project to start, complete the .env file in the main directory with the data that will be sent by e-mail,

### `start project in development mode - yarn dev`

Runs the app in the development mode with nodemon

After running the script, it will be possible to open the graphQL playground at the link http://localhost:5000/graphql

You will be able to test the queries and mutations listed at the end of the README file

### `run tests - yarn test`

Launches the test runner in the interactive watch mode.\

## `Examples of queries and mutations`

### `Users Query`

{
users{
id
firstName
lastName
email
date
}
}

### `User Query`

{
user(id: "id"){
id
firstName
lastName
email
date
}
}

### `Add User Mutation`

mutation {
addUser(firstName: "John", lastName: "Doe", email: "john@Doe.com" date: "2022-09-13T20:37:09.334Z") {
id
firstName
lastName
email
date
}
}

### `Delete User Mutation`

mutation {
deleteUser(id: "id") {
id
firstName
lastName
email
date
}
}
