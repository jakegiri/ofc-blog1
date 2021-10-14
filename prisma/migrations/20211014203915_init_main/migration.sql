/*
  Warnings:

  - You are about to drop the column `author_id` on the `posts` table. All the data in the column will be lost.
  - You are about to alter the column `first_name` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `last_name` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - You are about to alter the column `email` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(100)`.
  - Added the required column `main_catagory_id` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "posts" DROP CONSTRAINT "posts_author_id_fkey";

-- AlterTable
ALTER TABLE "posts" DROP COLUMN "author_id",
ADD COLUMN     "main_catagory_id" TEXT NOT NULL,
ALTER COLUMN "title" DROP NOT NULL,
ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "deleted_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "first_name" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "last_name" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "email" SET DATA TYPE VARCHAR(100);

-- DropEnum
DROP TYPE "Role";

-- CreateTable
CREATE TABLE "roles" (
    "_id" TEXT NOT NULL,
    "name" VARCHAR(255),
    "can_query_users" BOOLEAN DEFAULT false,
    "can_crud_users" BOOLEAN DEFAULT false,
    "can_query_roles" BOOLEAN DEFAULT false,
    "can_crud_roles" BOOLEAN DEFAULT false,
    "can_query_posts" BOOLEAN DEFAULT false,
    "can_crud_posts" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "modified_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "catagories" (
    "_id" TEXT NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "modified_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "roles_users" (
    "role_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    PRIMARY KEY ("role_id","user_id")
);

-- CreateTable
CREATE TABLE "posts_users" (
    "post_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    PRIMARY KEY ("post_id","user_id")
);

-- CreateTable
CREATE TABLE "catagories_posts" (
    "catagory_id" TEXT NOT NULL,
    "post_id" TEXT NOT NULL,

    PRIMARY KEY ("catagory_id","post_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "catagories.name_unique" ON "catagories"("name");

-- AddForeignKey
ALTER TABLE "posts" ADD FOREIGN KEY ("main_catagory_id") REFERENCES "catagories"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roles_users" ADD FOREIGN KEY ("role_id") REFERENCES "roles"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roles_users" ADD FOREIGN KEY ("user_id") REFERENCES "users"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posts_users" ADD FOREIGN KEY ("post_id") REFERENCES "posts"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posts_users" ADD FOREIGN KEY ("user_id") REFERENCES "users"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "catagories_posts" ADD FOREIGN KEY ("catagory_id") REFERENCES "catagories"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "catagories_posts" ADD FOREIGN KEY ("post_id") REFERENCES "posts"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- RenameIndex
ALTER INDEX "users_email_key" RENAME TO "users.email_unique";
