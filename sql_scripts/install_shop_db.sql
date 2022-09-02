CREATE DATABASE shop_template;

USE shop_template;

CREATE USER 'Maria'@'%' IDENTIFIED BY 'tmax';

GRANT ALL PRIVILEGES ON shop_template.* TO 'Maria'@'%';

FLUSH PRIVILEGES;

CREATE TABLE `User` (
  `id` varchar(255) PRIMARY KEY,
  `client_id` int,
  `name` varchar(15),
  `email` varchar(30),
  `phone` varchar(15),
  `birth` varchar(10),s
  `password` varchar(100),
  `created_at` timestamp
);

CREATE TABLE `OauthClientDetails` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `resource_id` varchar(255),
  `client_secret` timestamp,
  `scope` int,
  `authorized_grant_types` VARCHAR(256),
  `web_server_redirect_uri` VARCHAR(256),
  `logout_uri` VARCHAR(256),
  `base_uri` VARCHAR(256),
  `authorities` VARCHAR(256),
  `access_token_validity` INTEGER,
  `refresh_token_validity` INTEGER,
  `additional_information` VARCHAR(4096),
  `autoapprove` VARCHAR(256)
);

CREATE TABLE `OauthAccessToken` (
  `authentication_id` int PRIMARY KEY AUTO_INCREMENT,
  `token_id` VARCHAR(256),
  `token` blob,
  `user_name` VARCHAR(256),
  `client_id` int,
  `authentication` blob,
  `refresh_token` VARCHAR(256)
);

CREATE TABLE `OauthRefreshToken` (
  `token_id` VARCHAR(256),
  `token` blob,
  `authentication` blob
);

CREATE TABLE `OauthCode` (
  `code` VARCHAR(256),
  `authentication` blob
);

CREATE TABLE `OauthApprovals` (
  `user_id` VARCHAR(256),
  `client_id` int,
  `scope` VARCHAR(256),
  `status` VARCHAR(10),
  `expiresAt` TIMESTAMP,
  `lastModifiedAt` TIMESTAMP
);

CREATE TABLE `Buyer` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` varchar(255),
  `class_num` varchar(255),
  `savings` int
);

CREATE TABLE `Address` (
  `buyer_id` int,
  `address` varchar(255),
  `created_at` timestamp,
  `default` boolean
);

CREATE TABLE `Product` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `lg_category_id` int,
  `md_category_id` int,
  `sm_category_id` int,
  `code` varchar(255),
  `name` varchar(255),
  `price` int,
  `limit` int,
  `summary` varchar(255),
  `content` varchar(255),
  `created_at` timestamp,
  `updated_at` timestamp
);

CREATE TABLE `ProuductImage` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `product_id` int,
  `url` varchar(255),
  `thumbnail` boolean
);

CREATE TABLE `LargeCategory` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255)
);

CREATE TABLE `MediumCategory` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255)
);

CREATE TABLE `SmallCategory` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255)
);

CREATE TABLE `Option` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `product_id` int,
  `name` varchar(255),
  `content` varchar(255),
  `price` int,
  `created_at` timestamp
);

CREATE TABLE `Warehouse` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `address` varchar(255),
  `phone` varchar(255)
);

CREATE TABLE `Item` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `option_id` int,
  `warehouse_id` int,
  `quantity` int,
  `cost` int
);

CREATE TABLE `Supply` (
  `item_id` int,
  `warehouse_id` int,
  `created_at` timestamp,
  `quantity` int
);

CREATE TABLE `Order` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `product_id` int,
  `buyer_id` int,
  `ordered_at` timestamp,
  `status` varchar(255),
  `quantity` int,
  `invoice` varchar(255),
  `option_id` int
);

CREATE TABLE `Cart` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `product_id` int,
  `buyer_id`int,
  `added_at` timestamp,
  `quantity` int,
  `option_id` int
);

ALTER TABLE `User` ADD FOREIGN KEY (`client_id`) REFERENCES `OauthClientDetails` (`id`);

ALTER TABLE `OauthAccessToken` ADD FOREIGN KEY (`client_id`) REFERENCES `OauthClientDetails` (`id`);

ALTER TABLE `OauthApprovals` ADD FOREIGN KEY (`user_id`) REFERENCES `User` (`id`);

ALTER TABLE `OauthApprovals` ADD FOREIGN KEY (`client_id`) REFERENCES `OauthClientDetails` (`id`);

ALTER TABLE `Buyer` ADD FOREIGN KEY (`user_id`) REFERENCES `User` (`id`);

ALTER TABLE `Address` ADD FOREIGN KEY (`buyer_id`) REFERENCES `Buyer` (`id`);

ALTER TABLE `Product` ADD FOREIGN KEY (`lg_category_id`) REFERENCES `LargeCategory` (`id`);

ALTER TABLE `Product` ADD FOREIGN KEY (`md_category_id`) REFERENCES `MediumCategory` (`id`);

ALTER TABLE `Product` ADD FOREIGN KEY (`sm_category_id`) REFERENCES `SmallCategory` (`id`);

ALTER TABLE `ProuductImage` ADD FOREIGN KEY (`product_id`) REFERENCES `Product` (`id`);

ALTER TABLE `Option` ADD FOREIGN KEY (`product_id`) REFERENCES `Product` (`id`);

ALTER TABLE `Item` ADD FOREIGN KEY (`option_id`) REFERENCES `Option` (`id`);

ALTER TABLE `Item` ADD FOREIGN KEY (`warehouse_id`) REFERENCES `Warehouse` (`id`);

ALTER TABLE `Supply` ADD FOREIGN KEY (`item_id`) REFERENCES `Item` (`id`);

ALTER TABLE `Supply` ADD FOREIGN KEY (`warehouse_id`) REFERENCES `Warehouse` (`id`);

ALTER TABLE `Order` ADD FOREIGN KEY (`product_id`) REFERENCES `Product` (`id`);

ALTER TABLE `Order` ADD FOREIGN KEY (`buyer_id`) REFERENCES `Buyer` (`id`);

ALTER TABLE `Order` ADD FOREIGN KEY (`option_id`) REFERENCES `Option` (`id`);

ALTER TABLE `Cart` ADD FOREIGN KEY (`product_id`) REFERENCES `Product` (`id`);

ALTER TABLE `Cart` ADD FOREIGN KEY (`buyer_id`) REFERENCES `Buyer` (`id`);

ALTER TABLE `Cart` ADD FOREIGN KEY (`option_id`) REFERENCES `Option` (`id`);
