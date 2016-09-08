# Backfriend

## Overview

Backfriend is a BackEnd test (RESTful API) for Geek Development in Medellín, Colombia; a version continued of Graphriend Mini Social Network . This project use Koa2 (from scratch): a fast and lightweight framework for NodeJs.

# Quick Start Guide

### Prerequisites

In order to use Backfriend, you must have the following installed:

- [Node.js](https://nodejs.org/)
- [NPM](https://nodejs.org/)
- [MongoDB](http://www.mongodb.org/)
- [Git](https://git-scm.com/)

### Installation & Startup

To install Backfriend, simply enter the below in the terminal window:

```bash
$ git clone https://github.com/mirabalj/backfriend.git your-project
```

To install the dependencies, enter the following in your terminal:

```
$ cd your-project
$ npm install
```

This will install the Backfriend components into the `your-project` directory.


### Local Environment Variables

Exist a file named `config.js` in the server directory. This file should contain:

```
port = 3000
mongodbUri = 'mongodb://localhost/your-database'
baseApi = 'base-name-for-api-rest'
secretKey = 'YourSecretKey'
```

### Starting the App

To start the app, make sure you're in the project directory and type `npm start` into the terminal. This will start the Node server and connect to MongoDB.

You should the following messages within the terminal window:

```
The server is running at port 3000...
```

Next, open your browser and enter `http://localhost:3000/`. Congrats, you're up and running!

## Contributing

This is an open-source project, and contributions are always welcome!

## TODO

- Add Unit Tests.
- Separate logic functions from routes? Can be.
- Check Validations of logic business and possible bugs.
- Any idea to add quality and performance to application.

## Time of development
*16 hrs 4 mins 16 secs* and counting... check in [Wakatime](https://wakatime.com/@4685fd60-64b9-4af6-92da-0354491e36d6/projects/lmtueakfnv?start=2016-09-02&end=2016-09-08)

## Credits

* **Jinme Mirabal** - *All the work, a lot* - [Portfolio in Codepen.io](http://codepen.io/mirabalj/)

## License

MIT License. [Click here for more information.](LICENSE.md)
