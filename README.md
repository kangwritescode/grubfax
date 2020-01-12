# Grubfax

Grubfax is a simple React web app that I swiftly built for a first-round screening for a front-end engineer position. It fetches restaurant data at a given ZIP Code using the Zomato API and presents the data in a table and two graphs.

# Usage
Simply enter your (or any) ZIP Code in the input element on the landing page and click the search button or press enter. Grubfax will then present the data to you on the next page automatically.

# Installing

#### Setup
This app uses two APIs. ZipCodeAPI's API for fetching address information and Zomato's API for fetching restaurant data. The x and y coordinates from ZipCodeAPI's GET request are used as query parameter's in Zomato API's call.

Get a free API key at the respective URLs:

https://www.zipcodeapi.com/
https://developers.zomato.com/api

...and assign them to the appropriate variables in '/src/keys/keys.js'.

To run the application simply run the following commands in the main project directory:
```
$ npm install
$ npm start
```

