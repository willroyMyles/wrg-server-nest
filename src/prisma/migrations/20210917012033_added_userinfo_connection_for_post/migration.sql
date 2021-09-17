-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Post" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT,
    "content" TEXT,
    "category" TEXT,
    "make" TEXT,
    "model" TEXT,
    "year" INTEGER DEFAULT 1000,
    "views" INTEGER DEFAULT 0,
    "userInfoId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Post_userInfoId_fkey" FOREIGN KEY ("userInfoId") REFERENCES "UserInfo" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Post" ("category", "content", "createdAt", "id", "make", "model", "title", "views", "year") SELECT "category", "content", "createdAt", "id", "make", "model", "title", "views", "year" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
