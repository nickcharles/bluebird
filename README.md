bluebird
========

Bluebird is a web application that utilizes the Twitter API to find a display a user's non-mutual connections. It consists of two independent projects, a Node.js based Heroku server that acts as a proxy to the Twitter API, and a simple client-facing web application. The master branch of this repository tracks the development of the server, and the gh-pages branch tracks the client app.

To use Bluebird, enter your Twitter account name and submit the form. Bluebird will find all of the users who you follow but don't follow you back, and vice versa.
