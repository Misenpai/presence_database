-- CreateTable
CREATE TABLE `pis` (
    `username` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`username`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pi_project_relations` (
    `username` VARCHAR(255) NOT NULL,
    `projectCode` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`username`, `projectCode`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `pi_project_relations` ADD CONSTRAINT `pi_project_relations_username_fkey` FOREIGN KEY (`username`) REFERENCES `pis`(`username`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pi_project_relations` ADD CONSTRAINT `pi_project_relations_projectCode_fkey` FOREIGN KEY (`projectCode`) REFERENCES `projects`(`projectCode`) ON DELETE CASCADE ON UPDATE CASCADE;
