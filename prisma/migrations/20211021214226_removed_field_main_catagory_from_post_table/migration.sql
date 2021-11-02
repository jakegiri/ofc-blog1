/*
  Warnings:

  - You are about to drop the column `main_catagory_id` on the `posts` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "posts" DROP CONSTRAINT "posts_main_catagory_id_fkey";

-- AlterTable
ALTER TABLE "posts" DROP COLUMN "main_catagory_id";
