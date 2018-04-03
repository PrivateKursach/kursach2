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

CREATE TABLE `electronic_shop`.`es_order` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `user_id` BIGINT(20) NOT NULL,
  `created_date` DATE NOT NULL,
  PRIMARY KEY (`id`));

ALTER TABLE `electronic_shop`.`es_order`
  ADD INDEX `es_order_fk_idx` (`user_id` ASC);
ALTER TABLE `electronic_shop`.`es_order`
  ADD CONSTRAINT `es_order_fk`
FOREIGN KEY (`user_id`)
REFERENCES `electronic_shop`.`es_user` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

CREATE TABLE `electronic_shop`.`es_order_product` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `order_id` BIGINT(20) NOT NULL,
  `product_id` BIGINT(20) NOT NULL,
  `number` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `es_order_product_fk_idx` (`order_id` ASC),
  INDEX `es_order_product_fk1_idx` (`product_id` ASC),
  CONSTRAINT `es_order_product_fk`
  FOREIGN KEY (`order_id`)
  REFERENCES `electronic_shop`.`es_order` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `es_order_product_fk1`
  FOREIGN KEY (`product_id`)
  REFERENCES `electronic_shop`.`es_product` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `electronic_shop`.`es_product_type` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `electronic_shop`.`es_product_product_type` (
  `product_id` BIGINT(20) NOT NULL,
  `product_type_id` INT NOT NULL,
  PRIMARY KEY (`product_id`, `product_type_id`),
  INDEX `es_product_product_type_fk2_idx` (`product_type_id` ASC),
  CONSTRAINT `es_product_product_type_fk1`
  FOREIGN KEY (`product_id`)
  REFERENCES `electronic_shop`.`es_product` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `es_product_product_type_fk2`
  FOREIGN KEY (`product_type_id`)
  REFERENCES `electronic_shop`.`es_product_type` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

ALTER TABLE `electronic_shop`.`es_order`
  ADD COLUMN `total_price` INT NULL AFTER `created_date`,
  ADD COLUMN `status` INT NULL AFTER `total_price`;

ALTER TABLE `electronic_shop`.`es_user`
  ADD COLUMN `first_name` VARCHAR(100) NULL AFTER `role`,
  ADD COLUMN `last_name` VARCHAR(100) NULL AFTER `firsrt_name`;
