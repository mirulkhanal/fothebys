/*
  Warnings:

  - Changed the type of `year_of_production` on the `Art` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Art" DROP COLUMN "year_of_production",
ADD COLUMN     "year_of_production" INTEGER NOT NULL;
