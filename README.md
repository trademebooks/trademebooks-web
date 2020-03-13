# trademebooks.com (TMB)

## About
trademebooks.com (TMB) is a platform for university students to buy, sell, and exchange textbooks.

The key features:
1. Simple single sign on with platforms such as FaceBook, Google, Linkedin, Twitter, and many more.
2. Users have their own profile (bookstore) which allow them to advertise and sell their textbooks.
3. Adding/Updating Books.
    - Having the auto-complete feature when adding/updating a new or existing book.
    - A mobile image recognition (OCR - Optical character recognition) feature that can add/update books with the snap of a photo.
4. A middle man payment system;  
    Suppose person A wants to buy from person B a pdf file, person A and person B both pay trademebooks.com and/or upload the file, then TMB pays and reveals the uploaded files if only both of the two parties have successfully submitted what they wanted from each other. That way, trademebooks.com acts as a trusted middle man.
5. Have a good chat/messaging system in place in order to facilitate communication between buyers and sellers.  
 
## Tech Stack
- Frontend: JavaScript and ReactJS
- Backend: Node.js, Express, and MongoDB
- Server (DevOps): Heroku

## Required Software
1. Install NodeJS - https://nodejs.org/en/
2. Install MongoDB Compass (The GUI for MongoDB) - https://www.mongodb.com/products/compass

## Frontend Setup
```bash
cd client
npm install
```

## Backend Setup
Make sure to be in the root directory, then:
```bash
npm install
```

### Backend Setup - add the local config file
Create a file called *dev.js* under the config directory
```
module.exports = {
    googleClientID: "secret-key-here",
    googleClientSecret: "secret-key-here",
    mongoURI: "secret-key-here",
    cookieKey: "secret-key-here",
    stripePublishableKey: "secret-key-here",
    stripeSecretKey: "secret-key-here",
    sendGridKey: "secret-key-here",
    redirectDomain: "secret-key-here"
};
```

## Work Flow on Local Machine
Start the server locally on localhost:3000 with the following command in the root directory:
```bash
npm run dev
```

## Deploy to Production
- production link: https://www.trademebooks.com/
- heroku link: https://trademebooks.herokuapp.com/

*The application will automatically be deployed to production whenever a push is invoked on the master branch.
