-- CreateTable
CREATE TABLE "CategoryAlbum" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "idLogin" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "categoryAlbumSlug" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "CategoryAlbum_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CategoryAlbum" ADD CONSTRAINT "CategoryAlbum_idLogin_fkey" FOREIGN KEY ("idLogin") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
