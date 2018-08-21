/*SET FOREIGN_KEY_CHECKS=0;

INSERT INTO users (id, username, email, password, enabled) VALUES (1, 'yichen', 'yichenzhu1337@gmail.com', '{noop}yichen', 1);
INSERT INTO users (id, username, email, password, enabled) VALUES (2, 'joe', 'joe@joe', '{noop}joe', 1);
INSERT INTO users (id, username, email, password, enabled) VALUES (3, 'john', 'john@john.com', '{noop}test123', 1);
INSERT INTO users (id, username, email, password, enabled) VALUES (4, 'mary', 'marry@marry.com', '{noop}test123', 1);
INSERT INTO users (id, username, email, password, enabled) VALUES (5, 'susan', 'susan@susan.com', '{noop}test123', 1);

INSERT INTO `authorities` VALUES ('john','ROLE_EMPLOYEE');
INSERT INTO `authorities` VALUES ('mary','ROLE_EMPLOYEE');
INSERT INTO `authorities` VALUES ('mary','ROLE_MANAGER');
INSERT INTO `authorities` VALUES ('susan','ROLE_EMPLOYEE');
INSERT INTO `authorities` VALUES ('susan','ROLE_ADMIN');
*/
INSERT INTO book_stores (id, description,	name,	user_id) VALUES (1, 'best bookstore NA 1', 'bookstore 1', 1);
INSERT INTO book_stores (id, description,	name,	user_id) VALUES (2, 'best bookstore NA 2', 'bookstore 2', 1);
INSERT INTO book_stores (id, description,	name,	user_id) VALUES (3, 'best bookstore NA 3', 'bookstore 3', 1);

INSERT INTO books (id, book_store_id, title) VALUES (1, 1, 'book1');
INSERT INTO books (id, book_store_id, title) VALUES (2, 1, 'book2');
INSERT INTO books (id, book_store_id, title) VALUES (3, 1, 'book3');

SET FOREIGN_KEY_CHECKS=0;