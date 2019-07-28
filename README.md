# trademebooks.com - TMB

## About
trademebooks.com (TMB) is the place for university and college students to buy, sell, and exchange books.

The key features are:
1. Simple single on options like FaceBook, Google, Linkedin, Twitter, and many more.
2. Users have their own profile and their bookstore they want to advertise in order to sell their books.
3. Adding/Updating Books
    - Having the auto-complete feature when adding/updating a new or existing book.
    - A mobile image recognition feature that can add/update books with the snap of a picture.
4. A middle man payment system;  
    Suppose person A wants to buy from person B a pdf file, person A and person B both pay TMB and/or upload the file, then TMB pays and reveals the uploaded files if only both of the two parties have successfully submitted what they wanted from each other. That way, TMB acts as a trusted middle man.
5. Have a good chat/messaging system in place in order to facilitate communication between buyers and sellers.  
 
## Tech Stack
- Frontend: JavaScript and ReactJS
- Backend: Java and Spring
- Server (DevOps): Home Server, Tomcat, and Jenkins

## Setup
1. Install NodeJS - https://nodejs.org/en/
2. Install Java JDK 8 - https://www.oracle.com/technetwork/java/javase/downloads/index.html
3. Install Maven - https://www.youtube.com/watch?v=6AVC3X88z6E
4. Install MySQL - http://www.wampserver.com/en/

## Frontend Work Flow
```bash
cd client
yarn install OR npm install
yarn start OR npm start
```

## Backend Work Flow DB
Backend API Link:
- https://eblock.postman.co/collections/267717-f1be5c95-e9b7-4109-a87a-72a623794732?workspace=f4e60afd-9547-4e4e-ba66-ed89eaf382f4

*Note: no need for migration as Hibernate will do auto-migration on startup of the spring boot app
Database Migrations:
```bash
sh bin\migrate.sh
```

Run the spring boot app:
```
mvn spring-boot:run
```

## Server and Devops
- Jenkins URL: http://chosensolutions.asuscomm.com:8081/
- https://wwww.trademebooks.com
- https://api.trademebooks.com

## GIT/VCS
```bash
sh bin\1push.sh
```