DROP TABLE IF EXISTS accounts;

CREATE TABLE accounts (
  id              INT AUTO_INCREMENT PRIMARY KEY,
  receive_email   TINYINT DEFAULT 0,
  created_at      DATETIME,
  updated_at      DATETIME
)
  ENGINE = InnoDB
  CHARACTER SET utf8;