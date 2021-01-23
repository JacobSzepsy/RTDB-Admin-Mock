# What is this?

RTDB admin mock is a package to help with mocking the firebase admin implementation of real time database.

# How to use

### Install

To use you'll need this package and a unit testing framework. I am using Jest for this example.

```sh
$ npm install -D jest 
$ npm install -D https://github.com/JacobSzepsy/RTDB-Admin-Mock
```

### Create your DB

To enter in your dummy data create a json file called `RTDBmock.json` in the root of your project

### Mock your function

Finally you need to create a mock for the database object you export after initializing your sdk. In this example I am exporting it from `firebase.js` in the root directory.

```js
const ref = require('rtdb-admin-mock');

jest.mock('../firebase.js', _ => {
	...jest.requireActual('../firebase.js'),
	database: { ref: ref }
})
```
