# trademebooks.com (TMB) ![logo](https://github.com/yichenzhu1337/trademebooks-web/blob/master/client/public/favicon.png)

[![CircleCI](https://circleci.com/gh/yichenzhu1337/trademebooks-web.svg?style=shield)](https://circleci.com/gh/yichenzhu1337/trademebooks-web)
[![codecov](https://codecov.io/gh/yichenzhu1337/trademebooks-web/branch/master/graph/badge.svg?token=QLV1VDOBYU)](https://codecov.io/gh/yichenzhu1337/trademebooks-web)
![David](https://img.shields.io/david/yichenzhu1337/trademebooks-web?color=00cf33&style=flat-square)
![Uptime Robot ratio (30 days)](https://img.shields.io/uptimerobot/ratio/m782940751-02c03d7c51d8c9788fdeb1a3?style=flat-square)
![Heroku](http://heroku-badge.herokuapp.com/?app=trademebooks&style=flat&svg=1&root=notfound.html)

## 📌 Public Project!

This is a public open source project!

Live Website: https://www.trademebooks.com

:construction_worker: Check out our progress! https://trello.com/b/neeVBQO7

:art: Check out our wireframing process! https://figma.fun/CfpxqL

[trademebooks.com](https://www.trademebooks.com) is the successor project to McMaster Used Student Book Exchange (a.k.a. musbe). Check out the project on [GitHub](https://github.com/yichenzhu1337/musbe) and the [live version](https://www.musbe.ca).

## About

trademebooks.com (TMB) is a platform for university students to buy, sell, and exchange textbooks.

The key features:

- [x] Simple single sign on with platforms such as FaceBook, Google, Linkedin, Twitter, and many more.
- [x] Users have their own profile (bookstore) which allow them to advertise and sell their textbooks.
- [x] Adding/Updating Books: Having the auto-complete feature when adding/updating a new or existing book.
- [x] <strike>Adding/Updating Books: A mobile image recognition (OCR - Optical character recognition) feature that can add/update books with the snap of a photo.</strike>
- [x] Have a good chat/messaging system in place in order to facilitate communication between buyers and sellers.
- [x] <strike>A middle man payment system;  
       Suppose person A wants to buy from person B a pdf file, person A and person B both pay trademebooks.com and/or upload the file, then TMB pays and reveals the uploaded files if only both of the two parties have successfully submitted what they wanted from each other. That way, trademebooks.com acts as a trusted middle man.</strike>

## Tech Stack

- Frontend: JavaScript and ReactJS
- Backend: Node.js, Express, and MongoDB
- Server (DevOps): Heroku
- Tools: Visual Studio Code (with plugins: Prettier, ESlint, Husky), and MongoDB Atlas

## Required Software

1. Install NodeJS - https://nodejs.org/en/
2. Install MongoDB Compass (The GUI for MongoDB) - https://www.mongodb.com/products/compass

## Frontend Setup

```bash
cd client
npm install
```

### Frontend Setup - Run the tests

```bash
cd client
npm run test
```

## Backend Setup

Make sure to be in the root directory, then:

```bash
npm install
```

### Backend Setup - Add the local config file

Create a file called _dev.js_ under the `api/config` directory.

```js
module.exports = {
  baseUrl: 'http://localhost:',
  port: 5000,
  apiPrefix: 'api',
  apiVersion: 'v1',
  baseUrl: `${this.baseUrl}${this.port}/${this.apiPrefix}/${this.apiVersion}`,
  mongoURI: 'mongodb://localhost:27017/trademebooks_dev_db',
  sessionSecret: 'my-secret-session-dev',
  sendGridKey: 'my-sendgrid-key',
  twilioKeys: {
    accountSid: 'my-twilio-account-sid',
    authToken: 'my-twili-auth-token'
  }
}
```

https://drive.google.com/drive/folders/14W8O1DmqWm1DEV4Pld6hBhu0fmjKOiob

### Backend Setup - Seeding the databse with data

```bash
cd api/seeds
node <seed_file>.js
```

or

```bash
npm run db:seed
```

(Optional) Run MongoDB locally with Docker.

```bash
npm run mongo:start
```

### Backend Setup - Running the tests

Go to the root directory of the project and run the following command to see if all tests pass. Specifcy if you are on are on mac or windows in the parameter `[mac|windows]`

```bash
npm run test:[mac|windows]
```

## Work Flow on Local Machine

Start the server locally on localhost:3000 with the following command in the root directory:

```bash
npm run dev
```

## Linting and Prettier

Run the following commands in the root directory of the project.

For eslint on the backend `api` directory; but for eslint on the client frontend, run the test command in the client folder.

```bash
npm run lint:check # does a simple check for the backend api folder
npm run lint:fix # tries to fix all the linting issues in the backend api folder
```

For running prettier formatting for the entire project.

```bash
npm run prettier:check # checks if the entire is formatted properly
npm run prettier:write # reformat the entire project
```

## Deploy to Production

- production link: https://www.trademebooks.com/
- heroku link: https://trademebooks.herokuapp.com/

\*The application will automatically be deployed to production whenever a push is invoked on the master branch.
