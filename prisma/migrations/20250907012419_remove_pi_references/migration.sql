/*
  Warnings:

  - You are about to drop the `pi_project_relations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `pis` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `pi_project_relations` DROP FOREIGN KEY `pi_project_relations_projectCode_fkey`;

-- DropForeignKey
ALTER TABLE `pi_project_relations` DROP FOREIGN KEY `pi_project_relations_username_fkey`;

-- DropForeignKey
ALTER TABLE `pis` DROP FOREIGN KEY `pis_projectCode_fkey`;

-- DropTable
DROP TABLE `pi_project_relations`;

-- DropTable
DROP TABLE `pis`;
