'use client'

import { getReview, toggleEvaluationReview } from '@/app/service/api/review'
import { getUserByAuthId } from '@/app/service/api/user'
import { getCurrentAuthUser } from '@/app/service/auth'
import {
  ReviewEvaluationType,
  ReviewResponseType,
} from '@/app/types/review/type'
import { ReviewEvaluation } from '@/app/utils/review-util'
import { useState } from 'react'
import { IconContext } from 'react-icons'
import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from 'react-icons/ai'

export const ReviewComment = (props: ReviewResponseType) => {
  const isNegativeFlame = (emotionFlame: number) => {
    return 0 > emotionFlame
  }

  const [likeCount, setLikeCount] = useState(props._count.UsersOnReviewLike)
  const [badCount, setBadCount] = useState(props._count.UsersOnReviewBad)
  const [hasLikeReview, setHasLikeReview] = useState(
    props.UsersOnReviewLike.length > 0,
  )
  const [hasBadReview, setHasBadReview] = useState(
    props.UsersOnReviewBad.length > 0,
  )

  const onToggleEvaluation = async (type: ReviewEvaluationType) => {
    const authUser = await getCurrentAuthUser()
    if (!authUser) return
    const user = await getUserByAuthId(authUser.id)
    if (!user) return

    await toggleEvaluationReview(props.id, user.id, type)
    const updatedReview = await getReview(props.id, user.id)
    if (updatedReview) {
      setLikeCount(updatedReview._count.UsersOnReviewLike)
      setBadCount(updatedReview._count.UsersOnReviewBad)
      setHasLikeReview(updatedReview.UsersOnReviewLike.length > 0)
      setHasBadReview(updatedReview.UsersOnReviewBad.length > 0)
    }
  }

  return (
    <div className="w-full min-h-22 p-2 border rounded-lg mb-5">
      <div className="flex items-center justify-between w-full h-8 mb-2">
        <div className="flex items-center grow">
          <p>{props.to.name}</p>
          <span className="mx-4 px-2 bg-gray-200 rounded-md">to</span>
          <p>{props.from.name}</p>
        </div>
        <div className="flex items-center justify-end w-1/5">
          <div className="flex items-center w-20 px-2">
            <button
              className="cursor-pointer"
              onClick={() => onToggleEvaluation(ReviewEvaluation.Like)}
            >
              <IconContext.Provider value={{ size: '24' }}>
                {hasLikeReview ? <AiFillLike /> : <AiOutlineLike />}
              </IconContext.Provider>
            </button>
            <span className="ml-2">{likeCount}</span>
          </div>
          <div className="flex items-center w-20 px-2">
            <button
              className="cursor-pointer"
              onClick={() => onToggleEvaluation(ReviewEvaluation.Bad)}
            >
              <IconContext.Provider value={{ size: '24' }}>
                {hasBadReview ? <AiFillDislike /> : <AiOutlineDislike />}
              </IconContext.Provider>
            </button>
            <span className="ml-2">{badCount}</span>
          </div>
          <div>
            <p
              className={`text-green-500 ${isNegativeFlame(props.emotionFlame) && 'text-red-500'}`}
            >
              {props.emotionFlame}F
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="whitespace-break-spaces">{props.message}</p>
      </div>
    </div>
  )
}
