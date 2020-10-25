# trademebooks.com (TMB)

## About

trademebooks.com (TMB) is a platform for university students to buy, sell, and exchange textbooks.

The key features:

1. <strike>Simple single sign on with platforms such as FaceBook, Google, Linkedin, Twitter, and many more.</strike>
2. Users have their own profile (bookstore) which allow them to advertise and sell their textbooks.
3. Adding/Updating Books.
   - Having the auto-complete feature when adding/updating a new or existing book.
   - <strike>A mobile image recognition (OCR - Optical character recognition) feature that can add/update books with the snap of a photo.</strike>
4. A middle man payment system;  
   Suppose person A wants to buy from person B a pdf file, person A and person B both pay trademebooks.com and/or upload the file, then TMB pays and reveals the uploaded files if only both of the two parties have successfully submitted what they wanted from each other. That way, trademebooks.com acts as a trusted middle man.
5. Have a good chat/messaging system in place in order to facilitate communication between buyers and sellers.

## Tech Stack

- Frontend: JavaScript and ReactJS
- Backend: Node.js, Express, and MongoDB
- Server (DevOps): Heroku
- Tools: Visual Studio Code (with plugins: Prettier), and MongoDB Atlas

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

Create a file called _dev.js_ under the config directory.

```
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
};
```

Use This: https://drive.google.com/file/d/1o8WwjnuLpu13pKYMjJ8x2gTKKWUPr0V8/view?usp=sharing

### Backend Setup - Seeding the databse with data

```bash
cd api/seeds
node <seed_file>.js
```

or

```bash
npm run db:seed
```

### Backend Setup - Running the tests

Go to the root directory of the project and run the following command to see if all tests pass.

```bash
npm run test
```

## Work Flow on Local Machine

Start the server locally on localhost:3000 with the following command in the root directory:

```bash
npm run dev
```

## Deploy to Production

- production link: https://www.trademebooks.com/
- heroku link: https://trademebooks.herokuapp.com/

\*The application will automatically be deployed to production whenever a push is invoked on the master branch.
