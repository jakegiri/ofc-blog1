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

    CONSTRAINT "roles_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "users" (
    "_id" TEXT NOT NULL,
    "first_name" VARCHAR(100),
    "last_name" VARCHAR(100),
    "email" VARCHAR(100),
    "password" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "modified_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "posts" (
    "_id" TEXT NOT NULL,
    "title" VARCHAR(255),
    "description" VARCHAR(255),
    "main_catagory_id" TEXT NOT NULL,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "catagories" (
    "_id" TEXT NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "modified_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "catagories_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "roles_users" (
    "role_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "roles_users_pkey" PRIMARY KEY ("role_id","user_id")
);

-- CreateTable
CREATE TABLE "posts_users" (
    "post_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "posts_users_pkey" PRIMARY KEY ("post_id","user_id")
);

-- CreateTable
CREATE TABLE "catagories_posts" (
    "catagory_id" TEXT NOT NULL,
    "post_id" TEXT NOT NULL,

    CONSTRAINT "catagories_posts_pkey" PRIMARY KEY ("catagory_id","post_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "catagories_name_key" ON "catagories"("name");

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_main_catagory_id_fkey" FOREIGN KEY ("main_catagory_id") REFERENCES "catagories"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roles_users" ADD CONSTRAINT "roles_users_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "roles"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roles_users" ADD CONSTRAINT "roles_users_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posts_users" ADD CONSTRAINT "posts_users_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "posts"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posts_users" ADD CONSTRAINT "posts_users_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "catagories_posts" ADD CONSTRAINT "catagories_posts_catagory_id_fkey" FOREIGN KEY ("catagory_id") REFERENCES "catagories"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "catagories_posts" ADD CONSTRAINT "catagories_posts_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "posts"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;
