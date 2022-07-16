-- CreateTable
CREATE TABLE "Category" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "categorySlug" TEXT NOT NULL,
    "session" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);
