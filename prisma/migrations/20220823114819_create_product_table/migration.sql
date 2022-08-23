-- CreateTable
CREATE TABLE "product" (
    "id" TEXT NOT NULL,
    "idLogin" UUID NOT NULL,
    "idCategory" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "page" TEXT NOT NULL,
    "tag" TEXT NOT NULL,
    "vote" INTEGER NOT NULL,
    "like" INTEGER NOT NULL,
    "point" INTEGER NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_idLogin_fkey" FOREIGN KEY ("idLogin") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
