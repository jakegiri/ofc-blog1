/*
  Warnings:

  - You are about to drop the `_PostToUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_PostToUser" DROP CONSTRAINT "_PostToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_PostToUser" DROP CONSTRAINT "_PostToUser_B_fkey";

-- DropTable
DROP TABLE "_PostToUser";

-- DropTable
DROP TABLE "post";

-- DropTable
DROP TABLE "user";

-- CreateTable
CREATE TABLE "users" (
    "_id" TEXT NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT,
    "email" TEXT,
    "password" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "modified_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "posts" (
    "_id" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "author_id" TEXT NOT NULL,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "users"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;
