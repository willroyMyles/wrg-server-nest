-- CreateTable
CREATE TABLE "UserInfo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT,
    "userImageUrl" TEXT,
    "userId" TEXT,
    "email" TEXT,
    "alias" TEXT,
    "postId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT,
    "content" TEXT,
    "category" TEXT,
    "make" TEXT,
    "model" TEXT,
    "year" INTEGER DEFAULT 1000,
    "views" INTEGER DEFAULT 0,
    "userInfoId" TEXT,
    "watchingId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Post_userInfoId_fkey" FOREIGN KEY ("userInfoId") REFERENCES "UserInfo" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Post_watchingId_fkey" FOREIGN KEY ("watchingId") REFERENCES "UserInfo" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Messages" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "content" TEXT,
    "sender" TEXT,
    "conversationId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Messages_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "Conversation" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "content" TEXT,
    "isOffer" BOOLEAN NOT NULL DEFAULT false,
    "postId" TEXT,
    "title" TEXT,
    "userId" TEXT,
    "userImageUrl" TEXT,
    "username" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Comment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Conversation" (
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

-- CreateIndex
CREATE UNIQUE INDEX "UserInfo_email_key" ON "UserInfo"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Conversation_commentId_unique" ON "Conversation"("commentId");
