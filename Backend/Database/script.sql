CREATE TABLE `electronic_shop`.`es_product` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `description` MEDIUMTEXT NULL,
  `image_url` VARCHAR(150) NOT NULL,
  `price` INT NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `electronic_shop`.`es_user` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `role` INT NOT NULL,
  PRIMARY KEY (`id`));
