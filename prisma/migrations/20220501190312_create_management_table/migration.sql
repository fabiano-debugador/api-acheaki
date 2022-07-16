-- CreateTable
CREATE TABLE "Management" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Management_pkey" PRIMARY KEY ("id")
);
