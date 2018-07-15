/*DROP TABLE IF EXISTS messages;

CREATE TABLE messages (
  id          INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  from_id     INT NOT NULL,
  to_id       INT NOT NULL,
  body        VARCHAR(255) NOT NULL,
  is_read     TINYINT NOT NULL,
  created_at  DATETIME,
  updated_at  DATETIME
)
  ENGINE = InnoDB
  CHARACTER SET utf8;*/