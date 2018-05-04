CREATE TABLE books (
  id         INT AUTO_INCREMENT PRIMARY KEY,
  title      VARCHAR(255) NOT NULL,
  created_at DATETIME,
  updated_at DATETIME
)
  ENGINE = InnoDB
  CHARACTER SET utf8;