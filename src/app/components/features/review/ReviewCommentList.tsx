import type { ReviewResponseType } from '@/app/types/review/type'
import { ReviewComment } from './ReviewComment'

type Props = {
  reviews: ReviewResponseType[]
}

export const ReviewCommentList = ({ reviews }: Props) => {
  return (
    <ul>
      {reviews.map((review, i) => (
        <ReviewComment key={i} {...review} />
      ))}
    </ul>
  )
}
