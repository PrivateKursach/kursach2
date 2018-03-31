CREATE TABLE `electronic_shop`.`es_product` (
  `id` BIGINT NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `description` MEDIUMTEXT NULL,
  `image_url` VARCHAR(150) NOT NULL,
  `price` INT NOT NULL,
  PRIMARY KEY (`id`));

