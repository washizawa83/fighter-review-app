import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

type Props = {
  defaultValue?: number
  defaultSelectMessage?: string
  options: string[] | number[]
  isRightAlign?: boolean
  registerName: string
  register: UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>
}

export const SelectBox = ({
  defaultValue,
  defaultSelectMessage,
  options,
  isRightAlign,
  registerName,
  register,
  errors,
}: Props) => {
  return (
    <>
      <select
        className={`outline-none text-lg border rounded-lg bg-slate-100 ${isRightAlign && 'text-right'}`}
        defaultValue={defaultValue}
        {...register(registerName)}
      >
        <option value="">{defaultSelectMessage}</option>
        {options.map((option, i) => (
          <option key={i} value={i}>
            {option}
          </option>
        ))}
      </select>
      {errors[registerName] && (
        <div>
          <span className="text-red-500">
            {errors[registerName].message?.toString()}
          </span>
        </div>
      )}
    </>
  )
}
