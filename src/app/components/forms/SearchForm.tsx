import { HandleSearchUserCodeFromSubmit } from '@/app/service/route'

export const SearchForm = () => {
  return (
    <form action={HandleSearchUserCodeFromSubmit}>
      <label htmlFor="search">User Code</label>
      <input
        id="search"
        name="userCode"
        type="text"
        className="w-full px-3 h-8 text-xl rounded-2xl border outline-none"
      />
    </form>
  )
}
