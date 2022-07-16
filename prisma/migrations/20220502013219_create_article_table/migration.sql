/*
  Warnings:

  - You are about to drop the column `pagina` on the `Album` table. All the data in the column will be lost.
  - Added the required column `page` to the `Album` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Album" DROP COLUMN "pagina",
ADD COLUMN     "page" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Article" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "idLogin" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "articleSlug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "page" TEXT NOT NULL,
    "likes" INTEGER NOT NULL,
    "point" TEXT NOT NULL,
    "vote" INTEGER NOT NULL,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_idLogin_fkey" FOREIGN KEY ("idLogin") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
