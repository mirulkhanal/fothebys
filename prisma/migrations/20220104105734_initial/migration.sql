-- CreateEnum
CREATE TYPE "User_Type" AS ENUM ('ADMIN', 'BUYER', 'SELLER');

-- CreateEnum
CREATE TYPE "Art_type" AS ENUM ('MONOCHROME', 'COLOR');

-- CreateTable
CREATE TABLE "Art" (
    "id" VARCHAR(20) NOT NULL,
    "artist_name" VARCHAR(50) NOT NULL,
    "year_of_production" TIMESTAMP(3) NOT NULL,
    "subject_class" VARCHAR(20),
    "category_id" VARCHAR(20) NOT NULL,
    "catalog_id" VARCHAR(20) NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "seller_id" VARCHAR(20) NOT NULL,

    CONSTRAINT "Art_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" VARCHAR(20) NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "description" VARCHAR(240),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Catalog" (
    "id" VARCHAR(20) NOT NULL,
    "auction_id" VARCHAR(20) NOT NULL,

    CONSTRAINT "Catalog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Auction" (
    "id" VARCHAR(20) NOT NULL,
    "date" DATE NOT NULL,
    "title" VARCHAR(20) NOT NULL,
    "location" VARCHAR(120) NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Auction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" VARCHAR(20) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "password" VARCHAR(60) NOT NULL,
    "user_type" "User_Type" NOT NULL DEFAULT E'BUYER',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User_Profile" (
    "id" VARCHAR(20) NOT NULL,
    "user_id" VARCHAR(20) NOT NULL,
    "first_name" VARCHAR(20) NOT NULL,
    "last_name" VARCHAR(20) NOT NULL,
    "phone" VARCHAR(20) NOT NULL,
    "address" VARCHAR(120) NOT NULL,
    "image" VARCHAR(120),

    CONSTRAINT "User_Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Drawings" (
    "id" VARCHAR(20) NOT NULL,
    "image" VARCHAR(120) NOT NULL,
    "medium" VARCHAR(50) NOT NULL,
    "framed" BOOLEAN NOT NULL DEFAULT false,
    "height" INTEGER NOT NULL,
    "width" INTEGER NOT NULL,

    CONSTRAINT "Drawings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Paintings" (
    "id" VARCHAR(20) NOT NULL,
    "image" VARCHAR(120) NOT NULL,
    "medium" VARCHAR(50) NOT NULL,
    "framed" BOOLEAN NOT NULL DEFAULT false,
    "height" INTEGER NOT NULL,
    "width" INTEGER NOT NULL,

    CONSTRAINT "Paintings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Photos" (
    "id" VARCHAR(20) NOT NULL,
    "image" VARCHAR(120) NOT NULL,
    "type" "Art_type" NOT NULL DEFAULT E'COLOR',
    "framed" BOOLEAN NOT NULL DEFAULT false,
    "height" INTEGER NOT NULL,
    "width" INTEGER NOT NULL,

    CONSTRAINT "Photos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sculptures" (
    "id" VARCHAR(20) NOT NULL,
    "image" VARCHAR(120) NOT NULL,
    "material" VARCHAR(50) NOT NULL,
    "height" INTEGER NOT NULL,
    "length" INTEGER NOT NULL,
    "width" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,

    CONSTRAINT "Sculptures_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Carvings" (
    "id" VARCHAR(20) NOT NULL,
    "image" VARCHAR(120) NOT NULL,
    "material" VARCHAR(50) NOT NULL,
    "height" INTEGER NOT NULL,
    "length" INTEGER NOT NULL,
    "width" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,

    CONSTRAINT "Carvings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_Profile_phone_key" ON "User_Profile"("phone");

-- AddForeignKey
ALTER TABLE "Art" ADD CONSTRAINT "Art_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Art" ADD CONSTRAINT "Art_catalog_id_fkey" FOREIGN KEY ("catalog_id") REFERENCES "Catalog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Art" ADD CONSTRAINT "Art_seller_id_fkey" FOREIGN KEY ("seller_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Catalog" ADD CONSTRAINT "Catalog_auction_id_fkey" FOREIGN KEY ("auction_id") REFERENCES "Auction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User_Profile" ADD CONSTRAINT "User_Profile_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Drawings" ADD CONSTRAINT "Drawings_id_fkey" FOREIGN KEY ("id") REFERENCES "Art"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paintings" ADD CONSTRAINT "Paintings_id_fkey" FOREIGN KEY ("id") REFERENCES "Art"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Photos" ADD CONSTRAINT "Photos_id_fkey" FOREIGN KEY ("id") REFERENCES "Art"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sculptures" ADD CONSTRAINT "Sculptures_id_fkey" FOREIGN KEY ("id") REFERENCES "Art"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Carvings" ADD CONSTRAINT "Carvings_id_fkey" FOREIGN KEY ("id") REFERENCES "Art"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
