# Developing

The application uses the following libraries and tools:

- webpack to bundle modules
- babel to transform modules from ES6 to ES5 syntax (including test scripts)
- jest for testing
- redux for managing application state
- redux-sagas for enabling asynchronous behaviours

I didn't get as far as the views. These would have used React.



## Running the application

Type this at the command line to build the application:

	yarn start

There is no "development server" because I didn't get as far as writing views... 



## Testing

To run unit tests:

	yarn test

To run the tests continuously, against recently changed files and specs: 

	yarn test -- --watch

NOTE the `--` which passes command line arguments to the command specified in the yarn task.



## Further work

It needs to connect to the API, fetch some data, update the reducers, and the reducer changes need to trigger a drawing of a layout. The layout should show some comfortably styled weather information. 

The weather API calls need a key and calls can only be made once every 10 minutes. As well as storing the returned data in the store, it should also be cached locally and only called again once ten minutes have elapsed.

In an ideal world, the API key would also be kept secure and not transferred to the front-end code at all. A solution for this would be to request the weather data on the server, cache it and hand it to the front end along with the time of the call. This could be used to rehydrate the store when run on the client, and then cached in the clients' localstorage. This requires a "proper" hosting solution, enabling server-side JavaScript, such as heroku or a custom build on a cloud platform like Digital Ocean, Azure or AWS.

The weather API expects a city name, id or latitude and longitude coordinates. These can be harvested using either (or both) of a search box form on the client, or requesting GPS data from a mobile client. Redux sagas could be used to wrap calls to the browser geolocation permissions and API. 