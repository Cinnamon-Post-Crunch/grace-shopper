# The Seriously Cereal Shop

_Created by a small group of Fullstack Academy Grace Hopper students in fall 2019, The Seriously Cereal Shop is an imitation E-commerce site where users can browse and purchase cereal._

The deployed verson can be found at http://cinnamon-post-crunch.herokuapp.com/

## Technologies:

Javscript, React, Redux, Express, Sequelize, Heroku, PostgreSQL, OAuth, Stripe, Toast

## App features:

Users can experience the app either as a guest user or as a logged in user by making an account. Guests can and registered users alike can add cereal to their cart and can make orders to purchase the cereal upon completion of an order form. The items in the cart will persist even if the user closes the page and then returns shortly after. For registered users, the cart will persist also if the user logs out and returns at a later date. Additionally, registerd users can view their previous order history.

## To run this app locally:

_Note: this app runs on a PostgreSQL database, therefore users seeking to run this app locally will need PostgreSQL_

1.  Fork and clone the repository. Then in the terminal, run `npm install` to install dependancies

2.  Run `createdb grace-shopper` and `createdb grace-shopper-test` if you would like to run test specs as well

3.  To start the server, run `npm run start-dev`. It may take a moment as webpack is creating a bundle.js file at this step. When it says "Mixing it up on port 8080" you can navigate to localhost:8080 in your browser to see the application running

4.  To run tests, run `npm run test`
