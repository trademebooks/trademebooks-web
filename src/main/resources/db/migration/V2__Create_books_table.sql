DROP TABLE IF EXISTS books;

CREATE TABLE books (
  id         INT AUTO_INCREMENT PRIMARY KEY,
  title      VARCHAR(255) NOT NULL,
  created_at DATETIME,
  updated_at DATETIME
)
  ENGINE = InnoDB
  CHARACTER SET utf8;

INSERT INTO `books` (`id`, `title`, `created_at`, `updated_at`) VALUES (1, 'book1', NOW(), NOW());
INSERT INTO `books` (`id`, `title`, `created_at`, `updated_at`) VALUES (2, 'book2', NOW(), NOW());
INSERT INTO `books` (`id`, `title`, `created_at`, `updated_at`) VALUES (3, 'book3', NOW(), NOW());