-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "quantity" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" DATETIME
);
INSERT INTO "new_products" ("category", "created_at", "deleted_at", "id", "name", "quantity", "status", "updated_at") SELECT "category", "created_at", "deleted_at", "id", "name", "quantity", "status", "updated_at" FROM "products";
DROP TABLE "products";
ALTER TABLE "new_products" RENAME TO "products";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
