# Requests Project

### Description

Simple Express server for testing Client side to server requests (XHR currently).
The project contains a basic Express server w/ cors package enabled (to avoid any problems with CORS).

## Details

The project has two 'general' parts:

- A localpage directory containing examples of completing requests from the client to the server

  - \xhr_requests: has a web page and js file that shows how to use a get and post request
  -

- An Express app inh
  - This app contains two routes:
    - the first ('/') will send back a json object with {name: 'hi'}
    - the second takes a url parameter as an argument and echos the param.val back in the form of {"message":"Resource updated to: 2"}. This is because the url param in the post method is hardcoded
      to use the value '2' for simplicity.

## Usage instructions

1. Launch the Express app by navigating to the root directory and running `npm start` to start the server.
2. Open the web page you want use.

- for example, if you want to see how xhr works launch the localpage\xhr.html page.
  Likewise for the other examples.

3. Click on the Get or Post button and see the response that is provided.
4. (Optional) If you want to set through the code open the dev tools (this project was developed using Chrome).

### NOTES:

This project was developed using Chrome only, and has not been tested on any of the other browsers.
