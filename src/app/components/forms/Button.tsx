import { tv, VariantProps } from 'tailwind-variants'

type ButtonVariants = VariantProps<typeof button>

export const button = tv({
  base: 'min-w-22 min-h-8 text-base px-3 rounded-lg cursor-pointer',
  variants: {
    color: {
      success: 'bg-green-500 text-slate-100',
    },
  },
  defaultVariants: {
    color: 'success',
  },
})

type Props = {
  label: string
  type?: 'button' | 'submit'
  handleClick: () => void
} & ButtonVariants

export const Button = ({
  label,
  type = 'button',
  handleClick,
  ...variants
}: Props) => {
  return (
    <button type={type} className={button({ ...variants })}>
      {label}
    </button>
  )
}
