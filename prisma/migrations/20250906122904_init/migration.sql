-- CreateTable
CREATE TABLE `users` (
    `employeeNumber` VARCHAR(255) NOT NULL,
    `username` VARCHAR(255) NOT NULL,
    `empClass` VARCHAR(10) NOT NULL DEFAULT 'PJ',

    UNIQUE INDEX `users_username_key`(`username`),
    INDEX `users_username_idx`(`username`),
    PRIMARY KEY (`employeeNumber`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `projects` (
    `projectCode` VARCHAR(255) NOT NULL,
    `department` VARCHAR(255) NOT NULL,

    INDEX `projects_department_idx`(`department`),
    PRIMARY KEY (`projectCode`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `attendances` (
    `employeeNumber` VARCHAR(255) NOT NULL,
    `date` DATE NOT NULL,
    `checkinTime` DATETIME(3) NULL,
    `checkoutTime` DATETIME(3) NULL,
    `sessionType` ENUM('FN', 'AF') NULL,
    `attendanceType` ENUM('FULL_DAY', 'HALF_DAY') NULL,
    `locationType` ENUM('CAMPUS', 'FIELDTRIP') NOT NULL DEFAULT 'CAMPUS',
    `takenLocation` VARCHAR(255) NULL,
    `photoUrl` VARCHAR(500) NULL,
    `audioUrl` VARCHAR(500) NULL,
    `audioDuration` INTEGER NULL,
    `latitude` FLOAT NULL,
    `longitude` FLOAT NULL,
    `locationAddress` VARCHAR(500) NULL,
    `county` VARCHAR(255) NULL,
    `state` VARCHAR(255) NULL,
    `postcode` VARCHAR(20) NULL,

    INDEX `attendances_date_idx`(`date`),
    INDEX `attendances_employeeNumber_idx`(`employeeNumber`),
    INDEX `attendances_employeeNumber_date_idx`(`employeeNumber`, `date`),
    PRIMARY KEY (`employeeNumber`, `date`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `calendar` (
    `date` DATE NOT NULL,
    `isHoliday` BOOLEAN NOT NULL DEFAULT false,
    `isWeekend` BOOLEAN NOT NULL DEFAULT false,
    `description` VARCHAR(255) NULL,

    INDEX `calendar_date_idx`(`date`),
    INDEX `calendar_isHoliday_idx`(`isHoliday`),
    PRIMARY KEY (`date`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `field_trips` (
    `fieldTripKey` VARCHAR(191) NOT NULL,
    `employeeNumber` VARCHAR(255) NOT NULL,
    `startDate` DATE NOT NULL,
    `endDate` DATE NOT NULL,
    `description` TEXT NULL,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `createdBy` VARCHAR(255) NOT NULL,

    INDEX `field_trips_employeeNumber_idx`(`employeeNumber`),
    INDEX `field_trips_startDate_endDate_idx`(`startDate`, `endDate`),
    INDEX `field_trips_employeeNumber_startDate_endDate_idx`(`employeeNumber`, `startDate`, `endDate`),
    PRIMARY KEY (`fieldTripKey`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_project_relations` (
    `employeeNumber` VARCHAR(255) NOT NULL,
    `projectCode` VARCHAR(255) NOT NULL,

    INDEX `user_project_relations_employeeNumber_idx`(`employeeNumber`),
    INDEX `user_project_relations_projectCode_idx`(`projectCode`),
    PRIMARY KEY (`employeeNumber`, `projectCode`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pis` (
    `username` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `projectCode` VARCHAR(255) NOT NULL,

    INDEX `pis_projectCode_idx`(`projectCode`),
    PRIMARY KEY (`username`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pi_project_relations` (
    `username` VARCHAR(255) NOT NULL,
    `projectCode` VARCHAR(255) NOT NULL,

    INDEX `pi_project_relations_username_idx`(`username`),
    INDEX `pi_project_relations_projectCode_idx`(`projectCode`),
    PRIMARY KEY (`username`, `projectCode`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `attendances` ADD CONSTRAINT `attendances_employeeNumber_fkey` FOREIGN KEY (`employeeNumber`) REFERENCES `users`(`employeeNumber`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `field_trips` ADD CONSTRAINT `field_trips_employeeNumber_fkey` FOREIGN KEY (`employeeNumber`) REFERENCES `users`(`employeeNumber`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_project_relations` ADD CONSTRAINT `user_project_relations_employeeNumber_fkey` FOREIGN KEY (`employeeNumber`) REFERENCES `users`(`employeeNumber`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_project_relations` ADD CONSTRAINT `user_project_relations_projectCode_fkey` FOREIGN KEY (`projectCode`) REFERENCES `projects`(`projectCode`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pis` ADD CONSTRAINT `pis_projectCode_fkey` FOREIGN KEY (`projectCode`) REFERENCES `projects`(`projectCode`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pi_project_relations` ADD CONSTRAINT `pi_project_relations_username_fkey` FOREIGN KEY (`username`) REFERENCES `pis`(`username`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pi_project_relations` ADD CONSTRAINT `pi_project_relations_projectCode_fkey` FOREIGN KEY (`projectCode`) REFERENCES `projects`(`projectCode`) ON DELETE CASCADE ON UPDATE CASCADE;
