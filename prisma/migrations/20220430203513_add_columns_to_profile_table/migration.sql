/*
  Warnings:

  - Added the required column `banner` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `follower` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageProfile` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `point` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tag` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tituloSlug` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vote` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "banner" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "follower" INTEGER NOT NULL,
ADD COLUMN     "imageProfile" TEXT NOT NULL,
ADD COLUMN     "point" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "slogan" TEXT,
ADD COLUMN     "tag" TEXT NOT NULL,
ADD COLUMN     "tituloSlug" TEXT NOT NULL,
ADD COLUMN     "vote" INTEGER NOT NULL;
