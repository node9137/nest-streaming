CREATE TABLE `nest-streaming`.`user` (
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(100) NULL,
  `salt` VARCHAR(150) NULL,
  `rule` VARCHAR(60) NULL,
  `name` VARCHAR(50) NULL,
  `followList` JSON NULL,
  `expirationTime` TIMESTAMP NULL,
  `created` TIMESTAMP NULL,
  PRIMARY KEY (`email`)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='nest-notion';
