import { characterNameList, emotionFlameRanges } from '@/app/utils/app-util'
import { SelectBox } from '../../forms/SelectBox'

export const ReviewForm = () => {
  return (
    <div>
      <div className="mb-2">
        <label htmlFor="userCode">User Code</label>
        <input
          className="w-full border rounded-lg outline-none px-2"
          id="userCode"
          type="text"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="">Message</label>
        <textarea
          className="w-full border rounded-lg outline-none p-2"
          name=""
          id=""
          rows={3}
        ></textarea>
      </div>
      <div className="flex items-center flex-wrap mb-2">
        <div>
          <SelectBox
            defaultSelectMessage="your character"
            options={characterNameList}
          />
        </div>
        <div>
          <span className="mx-4 px-2 bg-gray-200 rounded-md">to</span>
        </div>
        <div>
          <SelectBox
            defaultSelectMessage="opponent character"
            options={characterNameList}
          />
        </div>
      </div>
      <div className="flex items-center">
        <p className="text-lg">Emotion Flame:</p>
        <div className="px-2">
          <SelectBox
            defaultValue={99}
            options={emotionFlameRanges}
            isRightAlign={true}
          />
        </div>
        <span>F</span>
      </div>
    </div>
  )
}
