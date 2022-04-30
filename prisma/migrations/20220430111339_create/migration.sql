-- CreateTable
CREATE TABLE "Profile" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "idLogin" UUID NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_idLogin_key" ON "Profile"("idLogin");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_idLogin_fkey" FOREIGN KEY ("idLogin") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
