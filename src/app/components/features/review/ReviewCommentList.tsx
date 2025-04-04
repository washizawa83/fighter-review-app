import type { Review } from '@/app/types/review/type'
import { ReviewComment } from './ReviewComment'

const mockReviews: Review[] = [
  {
    to: 'Ryu',
    from: 'Ken',
    message: 'You`re so boring, always using the same combo.',
    good: 12,
    bad: 3,
    emotionFlame: -20,
  },
  {
    to: 'Juri',
    from: 'Mai',
    message:
      'Tch, attacking from a distance like a coward. What, too scared to come close?',
    good: 12,
    bad: 3,
    emotionFlame: -20,
  },
  {
    to: 'Vega',
    from: 'Camy',
    message: '"Thanks for the matches!',
    good: 12,
    bad: 3,
    emotionFlame: 10,
  },
]

export const ReviewCommentList = () => {
  return (
    <ul>
      {mockReviews.map((review, i) => (
        <ReviewComment key={i} {...review} />
      ))}
    </ul>
  )
}
