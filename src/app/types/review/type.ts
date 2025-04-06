import { ReviewEvaluation } from '@/app/utils/review-util'
import { Review as ZodReview } from '@prisma/client'

export type Review = {
    to: string
    from: string
    message: string
    good: number
    bad: number
    emotionFlame: number
}

export type ReviewRequestType = Omit<ZodReview, 'createdAt'>

export type ReviewResponseType = {
    to: {id: number, name: string},
    from: {id: number, name: string}
    _count: {
        UsersOnReviewLike: number,
        UsersOnReviewBad: number
    }
    UsersOnReviewLike: {userId: string}[],
    UsersOnReviewBad: {userId: string}[]
} & ZodReview

export type ReviewEvaluationType = (typeof ReviewEvaluation)[keyof typeof ReviewEvaluation];