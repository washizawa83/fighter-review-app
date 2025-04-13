'use server'

import { ReviewEvaluationType, ReviewRequestType } from "@/app/types/review/type"
import { ReviewEvaluation } from "@/app/utils/review-util"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const createReview = async (data: ReviewRequestType) => {
    return await prisma.review.create({
        data
    })
}

export const getReview = async (reviewId: string, userId: string) => {
    return await prisma.review.findFirst({
        where: {
            id: reviewId
        },
        include: {
            to: true,
            from: true,
            _count: {
                select: {
                    UsersOnReviewLike: true,
                    UsersOnReviewBad: true,
                },
            },
            UsersOnReviewLike: {
                where: {
                  userId: userId,
                },
                select: {
                  userId: true,
                },
            },
            UsersOnReviewBad: {
                where: {
                    userId: userId,
                },
                select: {
                    userId: true,
                },
            },
        }
    })
}

export const getReviews = async (userId?: string) => {
    return await prisma.review.findMany({
        include: {
            to: true,
            from: true,
            _count: {
                select: {
                    UsersOnReviewLike: true,
                    UsersOnReviewBad: true,
                },
            },
            UsersOnReviewLike: {
                where: {
                  userId: userId,
                },
                select: {
                  userId: true,
                },
            },
            UsersOnReviewBad: {
                where: {
                    userId: userId,
                },
                select: {
                    userId: true,
                },
            },
        }
    })
}

export const getReviewsByUserCode = async ( userCode: number, userId?: string) => {
    return await prisma.review.findMany({
        where: {
            userCode
        },
        include: {
            to: true,
            from: true,
            _count: {
                select: {
                    UsersOnReviewLike: true,
                    UsersOnReviewBad: true,
                },
            },
            UsersOnReviewLike: {
                where: {
                  userId: userId,
                },
                select: {
                  userId: true,
                },
            },
            UsersOnReviewBad: {
                where: {
                    userId: userId,
                },
                select: {
                    userId: true,
                },
            },
        }
    })
}

export const toggleEvaluationReview = async (reviewId: string, userId: string, type: ReviewEvaluationType) => {
    const like = await prisma.usersOnReviewLike.findFirst({where: {reviewId, userId}})
    const bad = await prisma.usersOnReviewBad.findFirst({where: {reviewId, userId}})

    if (like && type === ReviewEvaluation.Like) {
        return await cancelLikeReview(reviewId, userId)
    }
    if (bad && type === ReviewEvaluation.Bad) {
        return await cancelBadReview(reviewId, userId)
    }

    if (type === ReviewEvaluation.Like) {
        if (bad) {
            await cancelBadReview(reviewId, userId)
        }
        return await onLikeReview(reviewId, userId)
    } else {
        if (like) {
            await cancelLikeReview(reviewId, userId)
        }
        return await onBadReview(reviewId, userId)
    }
}

export const onLikeReview = async (reviewId: string, userId: string) => {
    return await prisma.usersOnReviewLike.create({
        data: {
            reviewId,
            userId
        }
    })
}

export const cancelLikeReview = async (reviewId: string, userId: string) => {
    return await prisma.usersOnReviewLike.delete({
        where: {
            reviewId_userId: {
                reviewId,
                userId
            }
        }
    })
}

export const onBadReview = async (reviewId: string, userId: string) => {
    return await prisma.usersOnReviewBad.create({
        data: {
            reviewId,
            userId
        }
    })
}

export const cancelBadReview = async (reviewId: string, userId: string) => {
    return await prisma.usersOnReviewBad.delete({
        where: {
            reviewId_userId: {
                reviewId,
                userId
            }
        }
    })
}

// 総件数を取得
// const totalCount = await prisma.review.count()

// 総ページ数を計算
// const totalPages = Math.ceil(totalCount / pageSize)