CREATE TABLE `opinions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(320),
	`comment` text NOT NULL,
	`approved` int NOT NULL DEFAULT 1,
	`rating` int DEFAULT 5,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `opinions_id` PRIMARY KEY(`id`)
);
