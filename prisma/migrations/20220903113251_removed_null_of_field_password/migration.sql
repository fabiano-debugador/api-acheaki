/*
  Warnings:

  - Made the column `password` on table `client` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "client" ALTER COLUMN "password" SET NOT NULL;
