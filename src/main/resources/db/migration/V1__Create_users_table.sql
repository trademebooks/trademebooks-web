DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id          INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  email       VARCHAR(255) NOT NULL,
  password    VARCHAR(255) NOT NULL,
  enabled     TINYINT NOT NULL,
  created_at  DATETIME,
  updated_at  DATETIME
)
  ENGINE = InnoDB
  CHARACTER SET utf8;

