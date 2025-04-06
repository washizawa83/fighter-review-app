-- CreateTable
CREATE TABLE "UsersOnReviewBad" (
    "reviewId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UsersOnReviewBad_pkey" PRIMARY KEY ("reviewId","userId")
);

-- AddForeignKey
ALTER TABLE "UsersOnReviewBad" ADD CONSTRAINT "UsersOnReviewBad_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES "Review"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersOnReviewBad" ADD CONSTRAINT "UsersOnReviewBad_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
