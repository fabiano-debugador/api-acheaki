-- AlterTable
ALTER TABLE "Profile" ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "banner" DROP NOT NULL,
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "follower" DROP NOT NULL,
ALTER COLUMN "imageProfile" DROP NOT NULL,
ALTER COLUMN "point" DROP NOT NULL,
ALTER COLUMN "tag" DROP NOT NULL,
ALTER COLUMN "vote" DROP NOT NULL,
ALTER COLUMN "titleSlug" DROP NOT NULL;
