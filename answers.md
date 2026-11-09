# Part 1 - answers

Read the Express documentation (https://expressjs.com/en/5x/api.html) and answer in your own words.

## 1. What is inside the request object (`req`)?

<!-- write your answer here -->
The `req` object contains information about the incoming HTTP request, such as the URL, HTTP method, parameters, query strings, headers, and body.
## 2. What is inside the response object (`res`)?

<!-- write your answer here -->
The `res` object is used to send a response back to the client. It allows us to set the status code, send JSON data, and send other response information.
## 3. What does `app.use()` do?

<!-- write your answer here -->
The `app.use()` method is used to register middleware functions in Express. Middleware can process incoming requests before they reach the route handlers.