import { characterNameList, emotionFlameRanges } from '@/app/utils/app-util'
import { SelectBox } from '../../forms/SelectBox'
import { Button } from '../../forms/Button'
import { z } from 'zod'
import { FieldValues, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  userCode: z
    .number()
    .int()
    .nonnegative('Aren`t you being a little too negative?')
    .refine((val) => val.toString().length === 10, {
      message: 'Oops, the user code should be 10 digits.',
    }),
  message: z
    .string()
    .min(
      1,
      'If you`re satisfied, that`s fine. But if not, please make sure to leave a message.',
    )
    .max(
      500,
      'I`m sorry, but I can`t handle this much anger. Could you tone it down a bit?',
    ),
  to: z
    .string()
    .min(1)
    .transform((val) => Number(val)),
  from: z
    .string()
    .min(1)
    .transform((val) => Number(val)),
  emotionFlame: z
    .string()
    .min(1)
    .transform((val) => Number(val)),
})

export const ReviewForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FieldValues) => {
    console.log(data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-2">
          <label className="text-slate-100" htmlFor="userCode">
            User Code
          </label>
          <input
            className="w-full border rounded-lg outline-none px-2 bg-slate-100"
            id="userCode"
            type="number"
            {...register('userCode', { valueAsNumber: true })}
          />
          {errors['userCode'] && (
            <span className="text-red-500">
              {errors['userCode'].message?.toString()}
            </span>
          )}
        </div>
        <div className="mb-2">
          <label className="text-slate-100" htmlFor="">
            Message
          </label>
          <textarea
            className="w-full border rounded-lg outline-none p-2 bg-slate-100 max-h-63 min-h-10"
            id=""
            rows={3}
            {...register('message')}
          ></textarea>
          {errors['message'] && (
            <span className="text-red-500">
              {errors['message'].message?.toString()}
            </span>
          )}
        </div>
        <div className="flex items-center flex-wrap mb-2">
          <div>
            <SelectBox
              defaultSelectMessage="your character"
              options={characterNameList}
              registerName="to"
              register={register}
              errors={errors}
            />
          </div>
          <div>
            <span className="mx-4 px-2 bg-gray-200 rounded-md">to</span>
          </div>
          <div>
            <SelectBox
              defaultSelectMessage="opponent character"
              options={characterNameList}
              registerName="from"
              register={register}
              errors={errors}
            />
          </div>
        </div>
        <div className="flex items-center">
          <p className="text-lg text-slate-100">Emotion Flame :</p>
          <div className="px-2">
            <SelectBox
              defaultValue={99}
              options={emotionFlameRanges}
              isRightAlign={true}
              registerName="emotionFlame"
              register={register}
              errors={errors}
            />
          </div>
          <span className="text-slate-100">F</span>
        </div>
        <div className="flex justify-end">
          <Button type="submit" label="Post" handleClick={() => {}} />
        </div>
      </form>
    </div>
  )
}
