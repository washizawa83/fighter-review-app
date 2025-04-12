-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "authId" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "userCode" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "toCharacterId" INTEGER NOT NULL,
    "fromCharacterId" INTEGER NOT NULL,
    "emotionFlame" INTEGER NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsersOnReviewLike" (
    "reviewId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UsersOnReviewLike_pkey" PRIMARY KEY ("reviewId","userId")
);

-- CreateTable
CREATE TABLE "Character" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_authId_key" ON "User"("authId");

-- CreateIndex
CREATE UNIQUE INDEX "Character_id_key" ON "Character"("id");

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_toCharacterId_fkey" FOREIGN KEY ("toCharacterId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_fromCharacterId_fkey" FOREIGN KEY ("fromCharacterId") REFERENCES "Character"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersOnReviewLike" ADD CONSTRAINT "UsersOnReviewLike_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES "Review"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersOnReviewLike" ADD CONSTRAINT "UsersOnReviewLike_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
