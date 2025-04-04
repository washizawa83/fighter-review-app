import { ReviewCommentList } from './components/features/review/ReviewCommentList'
import { SearchForm } from './components/forms/SearchForm'
import { BasePageLayout } from './components/layouts/BasePageLayout'

export const TopPage = () => {
  return (
    <BasePageLayout>
      <div>
        <SearchForm />
        <div>
          <h2 className="text-2xl mb-2">Pick Reviews</h2>
          <ReviewCommentList />
        </div>
      </div>
    </BasePageLayout>
  )
}

export default TopPage
