CREATE TABLE users (
  id         INT AUTO_INCREMENT PRIMARY KEY,
  email      VARCHAR(255) NOT NULL,
  password   VARCHAR(255) NOT NULL,
  created_at DATETIME,
  updated_at DATETIME
)
  ENGINE = InnoDB
  CHARACTER SET utf8;