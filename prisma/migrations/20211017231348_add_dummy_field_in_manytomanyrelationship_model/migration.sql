/*
  Warnings:

  - Added the required column `dummy` to the `catagories_posts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dummy` to the `posts_users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dummy` to the `roles_users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "catagories_posts" ADD COLUMN     "dummy" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "posts_users" ADD COLUMN     "dummy" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "roles_users" ADD COLUMN     "dummy" TEXT NOT NULL;
