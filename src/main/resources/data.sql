SET FOREIGN_KEY_CHECKS=0;

INSERT INTO user (id, email, password, created)
VALUES
  (1, 'yichen@yichen.com',  'password', '2018-08-21 17:30:26'),
  (2, 'cedric@cedric.com',  'password', '2018-08-21 17:30:26'),
  (3, 'joe@joe',            'password', '2018-08-21 17:30:26'),
  (4, 'john@john.com',      'password', '2018-08-21 17:30:26'),
  (5, 'marry@marry.com',    'password', '2018-08-21 17:30:26'),
  (6, 'susan@susan.com',    'password', '2018-08-21 17:30:26');

/*
INSERT INTO `authorities` VALUES ('john','ROLE_EMPLOYEE');
INSERT INTO `authorities` VALUES ('mary','ROLE_EMPLOYEE');
INSERT INTO `authorities` VALUES ('mary','ROLE_MANAGER');
INSERT INTO `authorities` VALUES ('susan','ROLE_EMPLOYEE');
INSERT INTO `authorities` VALUES ('susan','ROLE_ADMIN');
*/

INSERT INTO book_stores (id, description,	name,	user_id)
VALUES
  (1, 'best bookstore NA 1', 'bookstore 1', 1),
  (2, 'best bookstore NA 2', 'bookstore 2', 1),
  (3, 'best bookstore NA 3', 'bookstore 3', 1);

INSERT INTO books (id, book_store_id, title)
VALUES
  (1, 1, 'book1'),
  (2, 1, 'book2'),
  (3, 1, 'book3');

SET FOREIGN_KEY_CHECKS=1;