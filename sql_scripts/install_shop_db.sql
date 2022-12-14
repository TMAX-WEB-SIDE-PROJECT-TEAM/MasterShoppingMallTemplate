CREATE DATABASE shop_template;

USE shop_template;

CREATE USER 'Maria'@'%' IDENTIFIED BY 'tmax';

GRANT ALL PRIVILEGES ON shop_template.* TO 'Maria'@'%';

FLUSH PRIVILEGES;

CREATE TABLE `user` (
  `id` varchar(255) PRIMARY KEY,
  `client_id` int,
  `name` varchar(15),
  `email` varchar(30),
  `phone` varchar(15),
  `birth` varchar(10),
  `password` varchar(100),
  `created_at` timestamp
);

CREATE TABLE `oauth_client_details` (
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

CREATE TABLE `oauth_access_token` (
  `authentication_id` int PRIMARY KEY AUTO_INCREMENT,
  `token_id` VARCHAR(256),
  `token` blob,
  `user_name` VARCHAR(256),
  `client_id` int,
  `authentication` blob,
  `refresh_token` VARCHAR(256)
);

CREATE TABLE `oauth_refresh_token` (
  `token_id` VARCHAR(256),
  `token` blob,
  `authentication` blob
);

CREATE TABLE `oauth_code` (
  `code` VARCHAR(256),
  `authentication` blob
);

CREATE TABLE `oauth_approvals` (
  `user_id` VARCHAR(256),
  `client_id` int,
  `scope` VARCHAR(256),
  `status` VARCHAR(10),
  `expiresAt` TIMESTAMP,
  `lastModifiedAt` TIMESTAMP
);

CREATE TABLE `buyer` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` varchar(255),
  `class_num` varchar(255),
  `savings` int
);

CREATE TABLE `address` (
  `buyer_id` int,
  `address` varchar(255),
  `created_at` timestamp,
  `default` boolean
);

CREATE TABLE `product` (
  `id` bigint PRIMARY KEY AUTO_INCREMENT,
  `lg_category_id` bigint,
  `md_category_id` bigint,
  `sm_category_id` bigint,
  `code` varchar(255),
  `name` varchar(255),
  `price` int,
  `limit` int,
  `summary` varchar(255),
  `content` varchar(255),
  `created_at` timestamp,
  `updated_at` timestamp,
  `option_id` int,
  `warehouse_id` int,
  `quantity` int,
  `cost` int
);

CREATE TABLE `product_image` (
  `id` bigint PRIMARY KEY AUTO_INCREMENT,
  `product_id` bigint,
  `url` varchar(255),
  `thumbnail` boolean
);

CREATE TABLE `large_category` (
  `id` bigint PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255)
);

CREATE TABLE `medium_category` (
  `id` bigint PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(255)
);

CREATE TABLE `small_category` (
  `id` bigint PRIMARY KEY,
  `name` varchar(255)
);

CREATE TABLE `option` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `product_id` bigint,
  `name` varchar(255),
  `content` varchar(255),
  `price` int,
  `created_at` timestamp
);

CREATE TABLE `warehouse` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `address` varchar(255),
  `phone` varchar(255)
);


CREATE TABLE `supply` (
  `product_id` bigint,
  `warehouse_id` int,
  `created_at` timestamp,
  `quantity` int
);

CREATE TABLE `order` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `product_id` bigint,
  `buyer_id` int,
  `ordered_at` timestamp,
  `status` varchar(255),
  `quantity` int,
  `invoice` varchar(255),
  `option_id` int
);

CREATE TABLE `cart` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `product_id` bigint,
  `buyer_id`int,
  `added_at` timestamp,
  `quantity` int,
  `option_id` int
);

CREATE TABLE `magazine` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `lg_id` bigint,
  `md_id` bigint,
  `sm_id` bigint,
  `content` varchar(255)
);

ALTER TABLE `magazine` ADD FOREIGN KEY (`lg_id`) REFERENCES `large_category` (`id`);

ALTER TABLE `magazine` ADD FOREIGN KEY (`md_id`) REFERENCES `medium_category` (`id`);

ALTER TABLE `magazine` ADD FOREIGN KEY (`sm_id`) REFERENCES `small_category` (`id`);

ALTER TABLE `User` ADD FOREIGN KEY (`client_id`) REFERENCES `oauth_client_details` (`id`);

ALTER TABLE `oauth_access_token` ADD FOREIGN KEY (`client_id`) REFERENCES `oauth_client_details` (`id`);

ALTER TABLE `oauth_approvals` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

ALTER TABLE `oauth_approvals` ADD FOREIGN KEY (`client_id`) REFERENCES `oauth_client_details` (`id`);

ALTER TABLE `buyer` ADD FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

ALTER TABLE `address` ADD FOREIGN KEY (`buyer_id`) REFERENCES `buyer` (`id`);

ALTER TABLE `product` ADD FOREIGN KEY (`lg_category_id`) REFERENCES `large_category` (`id`);

ALTER TABLE `product` ADD FOREIGN KEY (`md_category_id`) REFERENCES `medium_category` (`id`);

ALTER TABLE `product` ADD FOREIGN KEY (`sm_category_id`) REFERENCES `small_category` (`id`);

ALTER TABLE `product_image` ADD FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);

ALTER TABLE `option` ADD FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);

ALTER TABLE `product` ADD FOREIGN KEY (`option_id`) REFERENCES `option` (`id`);

ALTER TABLE `product` ADD FOREIGN KEY (`warehouse_id`) REFERENCES `warehouse` (`id`);

ALTER TABLE `supply` ADD FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);

ALTER TABLE `supply` ADD FOREIGN KEY (`warehouse_id`) REFERENCES `warehouse` (`id`);

ALTER TABLE `order` ADD FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);

ALTER TABLE `order` ADD FOREIGN KEY (`buyer_id`) REFERENCES `buyer` (`id`);

ALTER TABLE `order` ADD FOREIGN KEY (`option_id`) REFERENCES `option` (`id`);

ALTER TABLE `cart` ADD FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);

ALTER TABLE `cart` ADD FOREIGN KEY (`buyer_id`) REFERENCES `buyer` (`id`);

ALTER TABLE `cart` ADD FOREIGN KEY (`option_id`) REFERENCES `option` (`id`);
