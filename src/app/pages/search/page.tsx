import { ReviewCommentList } from '@/app/components/features/review/ReviewCommentList'
import { SearchForm } from '@/app/components/forms/SearchForm'
import { BasePageLayout } from '@/app/components/layouts/BasePageLayout'
import { getReviewsByUserCode } from '@/app/service/api/review'

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ userCode: string }>
}) {
  const { userCode } = await searchParams
  console.log(userCode)

  const reviews = await getReviewsByUserCode(parseInt(userCode, 10))
  return (
    <BasePageLayout>
      <div>
        <div className="py-10">
          <SearchForm />
        </div>
        <div>
          <ReviewCommentList reviews={reviews} />
        </div>
      </div>
    </BasePageLayout>
  )
}
