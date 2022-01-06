/*
  Warnings:

  - The primary key for the `Auction` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Auction" DROP CONSTRAINT "Auction_pkey",
ALTER COLUMN "id" SET DATA TYPE VARCHAR(50),
ADD CONSTRAINT "Auction_pkey" PRIMARY KEY ("id");
