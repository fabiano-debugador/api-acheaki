/*
  Warnings:

  - A unique constraint covering the columns `[login]` on the table `Client` will be added. If there are existing duplicate values, this will fail.
  - Made the column `login` on table `Client` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Client" ALTER COLUMN "login" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Client_login_key" ON "Client"("login");
