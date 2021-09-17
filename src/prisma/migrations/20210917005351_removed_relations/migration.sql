/*
  Warnings:

  - You are about to drop the column `conversationId` on the `Messages` table. All the data in the column will be lost.
  - You are about to drop the column `userInfoId` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `watchingId` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `postId` on the `UserInfo` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Conversation_commentId_unique";

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Messages" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "content" TEXT,
    "sender" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Messages" ("content", "createdAt", "id", "sender") SELECT "content", "createdAt", "id", "sender" FROM "Messages";
DROP TABLE "Messages";
ALTER TABLE "new_Messages" RENAME TO "Messages";
CREATE TABLE "new_Comment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "content" TEXT,
    "isOffer" BOOLEAN NOT NULL DEFAULT false,
    "postId" TEXT,
    "title" TEXT,
    "userId" TEXT,
    "userImageUrl" TEXT,
    "username" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Comment" ("content", "createdAt", "id", "isOffer", "postId", "title", "userId", "userImageUrl", "username") SELECT "content", "createdAt", "id", "isOffer", "postId", "title", "userId", "userImageUrl", "username" FROM "Comment";
DROP TABLE "Comment";
ALTER TABLE "new_Comment" RENAME TO "Comment";
CREATE TABLE "new_Post" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT,
    "content" TEXT,
    "category" TEXT,
    "make" TEXT,
    "model" TEXT,
    "year" INTEGER DEFAULT 1000,
    "views" INTEGER DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Post" ("category", "content", "createdAt", "id", "make", "model", "title", "views", "year") SELECT "category", "content", "createdAt", "id", "make", "model", "title", "views", "year" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
CREATE TABLE "new_UserInfo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT,
    "userImageUrl" TEXT,
    "userId" TEXT,
    "email" TEXT,
    "alias" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_UserInfo" ("alias", "createdAt", "email", "id", "userId", "userImageUrl", "username") SELECT "alias", "createdAt", "email", "id", "userId", "userImageUrl", "username" FROM "UserInfo";
DROP TABLE "UserInfo";
ALTER TABLE "new_UserInfo" RENAME TO "UserInfo";
CREATE UNIQUE INDEX "UserInfo_userId_key" ON "UserInfo"("userId");
CREATE UNIQUE INDEX "UserInfo_email_key" ON "UserInfo"("email");
CREATE TABLE "new_Conversation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "locked" BOOLEAN NOT NULL DEFAULT false,
    "userInfoId" TEXT,
    "commentId" TEXT,
    "postId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "senderId" TEXT NOT NULL,
    "recieverId" TEXT NOT NULL,
    "newMessage" TEXT
);
INSERT INTO "new_Conversation" ("commentId", "createdAt", "id", "locked", "newMessage", "postId", "recieverId", "senderId", "userInfoId") SELECT "commentId", "createdAt", "id", "locked", "newMessage", "postId", "recieverId", "senderId", "userInfoId" FROM "Conversation";
DROP TABLE "Conversation";
ALTER TABLE "new_Conversation" RENAME TO "Conversation";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
