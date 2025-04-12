import { ReviewCommentList } from './components/features/review/ReviewCommentList'
import { SearchForm } from './components/forms/SearchForm'
import { BasePageLayout } from './components/layouts/BasePageLayout'
import { getReviews } from './service/api/review'

export const TopPage = async () => {
  const reviews = await getReviews()

  return (
    <BasePageLayout>
      <div>
        <div className="py-10">
          <SearchForm />
        </div>
        <div>
          <h2 className="text-2xl mb-2">Pick Reviews</h2>
          <ReviewCommentList reviews={reviews} />
        </div>
      </div>
    </BasePageLayout>
  )
}

export default TopPage
