import classNames from "classnames"
import Link from "next/link"

type Size = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

type ButtonProps = {
  children: React.ReactElement | string | number
  size?: Size
  fluid?: boolean
  href?: string
  to?: string
  onClick?: () => void
}

const useSize = (size?: Size) => {
  switch (size) {
    case 'md':
    default: 
      return 'px-5 py-2.5'
    case 'xl':
      return 'px-6 py-3.5'
  }
}

type UseButtonProps = {
  size?: ButtonProps['size']
  fluid?: ButtonProps['fluid']
}

const useButton = ({ size, fluid }: UseButtonProps) => {
  let styles = ''

  const color = 'text-white'
  const backgroundColor = 'bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700'
  const focus = 'focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'
  const fontWeight = 'font-medium'
  const fontStyle = 'text-base'
  const textAlignment = 'text-center'
  const borderRadius = 'rounded-lg'
  
  const btnSize = useSize(size)
  if (fluid) styles = styles + ' w-full'

  return classNames(color, backgroundColor, focus, fontWeight, fontStyle, textAlignment, borderRadius, btnSize, {
    'w-full': fluid
  })
}

export default function Button({ children, href, to, onClick, size = 'md', fluid }: ButtonProps) {
  const className = useButton({ size, fluid })

  if (to || href) {
      return <Link className={className} href={href || to}>{children}</Link>
  }

  return <button type="button" className={className} onClick={onClick}>{children}</button>
}