DROP TABLE IF EXISTS profiles;

CREATE TABLE profiles (
  id          INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  first_name  VARCHAR(255) NOT NULL,
  last_name   VARCHAR(255) NOT NULL,
  enabled     TINYINT NOT NULL,
  created_at  DATETIME,
  updated_at  DATETIME
)
  ENGINE = InnoDB
  CHARACTER SET utf8;