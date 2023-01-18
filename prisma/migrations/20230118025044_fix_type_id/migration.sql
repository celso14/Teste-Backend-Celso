/*
  Warnings:

  - You are about to alter the column `id` on the `cities` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_cities" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL
);
INSERT INTO "new_cities" ("id", "name") SELECT "id", "name" FROM "cities";
DROP TABLE "cities";
ALTER TABLE "new_cities" RENAME TO "cities";
CREATE UNIQUE INDEX "cities_id_key" ON "cities"("id");
CREATE UNIQUE INDEX "cities_name_key" ON "cities"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
