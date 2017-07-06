# Developing

The application uses the following libraries and tools:

- webpack to bundle modules
- babel to transform modules from ES6 to ES5 syntax (including test scripts)
- jest for testing
- redux for managing application state
- redux-sagas for enabling asynchronous behaviours
- react for rendering views



## Running the application

Type this at the command line to build the application:

	yarn start



## Testing

To run unit tests:

	yarn test

To run the tests continuously, against recently changed files and specs: 

	yarn test -- --watch

NOTE the `--` which passes command line arguments to the command specified in the yarn task.