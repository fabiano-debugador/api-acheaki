-- CreateTable
CREATE TABLE "Contact" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "idLogin" UUID NOT NULL,
    "phone" TEXT NOT NULL,
    "cell" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "skype" TEXT NOT NULL,
    "facebook" TEXT NOT NULL,
    "twitter" TEXT NOT NULL,
    "youtube" TEXT NOT NULL,
    "instagram" TEXT NOT NULL,
    "pinterest" TEXT NOT NULL,
    "linkedin" TEXT NOT NULL,
    "page" TEXT NOT NULL,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Contact_idLogin_key" ON "Contact"("idLogin");

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_idLogin_fkey" FOREIGN KEY ("idLogin") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
