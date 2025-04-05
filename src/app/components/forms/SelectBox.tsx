type Props = {
  defaultValue?: number
  defaultSelectMessage?: string
  options: string[] | number[]
  isRightAlign?: boolean
}

export const SelectBox = ({
  defaultValue,
  defaultSelectMessage,
  options,
  isRightAlign,
}: Props) => {
  return (
    <select
      className={`outline-none text-lg border rounded-lg ${isRightAlign && 'text-right'}`}
      defaultValue={defaultValue}
    >
      <option value="">{defaultSelectMessage}</option>
      {options.map((option, i) => (
        <option key={i} value={i}>
          {option}
        </option>
      ))}
    </select>
  )
}
