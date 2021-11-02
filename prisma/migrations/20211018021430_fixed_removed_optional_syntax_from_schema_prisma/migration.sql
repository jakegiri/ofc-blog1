/*
  Warnings:

  - Made the column `created_at` on table `catagories` required. This step will fail if there are existing NULL values in that column.
  - Made the column `modified_at` on table `catagories` required. This step will fail if there are existing NULL values in that column.
  - Made the column `title` on table `posts` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `posts` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `roles` required. This step will fail if there are existing NULL values in that column.
  - Made the column `can_query_users` on table `roles` required. This step will fail if there are existing NULL values in that column.
  - Made the column `can_crud_users` on table `roles` required. This step will fail if there are existing NULL values in that column.
  - Made the column `can_query_roles` on table `roles` required. This step will fail if there are existing NULL values in that column.
  - Made the column `can_crud_roles` on table `roles` required. This step will fail if there are existing NULL values in that column.
  - Made the column `can_query_posts` on table `roles` required. This step will fail if there are existing NULL values in that column.
  - Made the column `can_crud_posts` on table `roles` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `roles` required. This step will fail if there are existing NULL values in that column.
  - Made the column `modified_at` on table `roles` required. This step will fail if there are existing NULL values in that column.
  - Made the column `deleted_at` on table `roles` required. This step will fail if there are existing NULL values in that column.
  - Made the column `first_name` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `last_name` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `modified_at` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `deleted_at` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `confirmed` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "catagories" ALTER COLUMN "created_at" SET NOT NULL,
ALTER COLUMN "modified_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "catagories_posts" ALTER COLUMN "dummy" DROP NOT NULL;

-- AlterTable
ALTER TABLE "posts" ALTER COLUMN "title" SET NOT NULL,
ALTER COLUMN "description" SET NOT NULL;

-- AlterTable
ALTER TABLE "posts_users" ALTER COLUMN "dummy" DROP NOT NULL;

-- AlterTable
ALTER TABLE "roles" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "can_query_users" SET NOT NULL,
ALTER COLUMN "can_crud_users" SET NOT NULL,
ALTER COLUMN "can_query_roles" SET NOT NULL,
ALTER COLUMN "can_crud_roles" SET NOT NULL,
ALTER COLUMN "can_query_posts" SET NOT NULL,
ALTER COLUMN "can_crud_posts" SET NOT NULL,
ALTER COLUMN "created_at" SET NOT NULL,
ALTER COLUMN "modified_at" SET NOT NULL,
ALTER COLUMN "deleted_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "roles_users" ADD COLUMN     "dummy" TEXT;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "first_name" SET NOT NULL,
ALTER COLUMN "last_name" SET NOT NULL,
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "password" SET NOT NULL,
ALTER COLUMN "created_at" SET NOT NULL,
ALTER COLUMN "modified_at" SET NOT NULL,
ALTER COLUMN "deleted_at" SET NOT NULL,
ALTER COLUMN "confirmed" SET NOT NULL;
