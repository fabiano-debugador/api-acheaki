/*
  Warnings:

  - You are about to drop the `Client` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Album" DROP CONSTRAINT "Album_idLogin_fkey";

-- DropForeignKey
ALTER TABLE "Article" DROP CONSTRAINT "Article_idLogin_fkey";

-- DropForeignKey
ALTER TABLE "CategoryAlbum" DROP CONSTRAINT "CategoryAlbum_idLogin_fkey";

-- DropForeignKey
ALTER TABLE "CategoryProduct" DROP CONSTRAINT "CategoryProduct_idLogin_fkey";

-- DropForeignKey
ALTER TABLE "Contact" DROP CONSTRAINT "Contact_idLogin_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_idLogin_fkey";

-- DropForeignKey
ALTER TABLE "product" DROP CONSTRAINT "product_idLogin_fkey";

-- DropTable
DROP TABLE "Client";

-- CreateTable
CREATE TABLE "client" (
    "id" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT,

    CONSTRAINT "client_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "client_login_key" ON "client"("login");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_idLogin_fkey" FOREIGN KEY ("idLogin") REFERENCES "client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Album" ADD CONSTRAINT "Album_idLogin_fkey" FOREIGN KEY ("idLogin") REFERENCES "client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_idLogin_fkey" FOREIGN KEY ("idLogin") REFERENCES "client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryAlbum" ADD CONSTRAINT "CategoryAlbum_idLogin_fkey" FOREIGN KEY ("idLogin") REFERENCES "client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryProduct" ADD CONSTRAINT "CategoryProduct_idLogin_fkey" FOREIGN KEY ("idLogin") REFERENCES "client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_idLogin_fkey" FOREIGN KEY ("idLogin") REFERENCES "client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_idLogin_fkey" FOREIGN KEY ("idLogin") REFERENCES "client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
