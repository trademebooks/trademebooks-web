/*DROP TABLE IF EXISTS notifications;

CREATE TABLE notifications (
  id          INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
  name        VARCHAR(255) NOT NULL,
  body        VARCHAR(255) NOT NULL,
  is_read     TINYINT,
  created_at  DATETIME,
  updated_at  DATETIME
)
  ENGINE = InnoDB
  CHARACTER SET utf8;*/