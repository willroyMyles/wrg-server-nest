-- AlterTable
ALTER TABLE "UserInfo" ADD COLUMN "postId" TEXT;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Messages" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "content" TEXT,
    "sender" TEXT,
    "conversationId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Messages_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "Conversation" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Messages" ("content", "createdAt", "id", "sender") SELECT "content", "createdAt", "id", "sender" FROM "Messages";
DROP TABLE "Messages";
ALTER TABLE "new_Messages" RENAME TO "Messages";
CREATE TABLE "new_Conversation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "locked" BOOLEAN NOT NULL DEFAULT false,
    "userInfoId" TEXT,
    "commentId" TEXT,
    "postId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "senderId" TEXT NOT NULL,
    "recieverId" TEXT NOT NULL,
    "newMessage" TEXT,
    CONSTRAINT "Conversation_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Conversation_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Conversation_recieverId_fkey" FOREIGN KEY ("recieverId") REFERENCES "UserInfo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Conversation_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "UserInfo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Conversation" ("commentId", "createdAt", "id", "locked", "newMessage", "postId", "recieverId", "senderId", "userInfoId") SELECT "commentId", "createdAt", "id", "locked", "newMessage", "postId", "recieverId", "senderId", "userInfoId" FROM "Conversation";
DROP TABLE "Conversation";
ALTER TABLE "new_Conversation" RENAME TO "Conversation";
CREATE UNIQUE INDEX "Conversation_commentId_unique" ON "Conversation"("commentId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
