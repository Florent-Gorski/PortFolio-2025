import { ReactNode } from 'react'

type Variant = 'online' | 'soon' | 'default'

export default function Badge({
  children,
  variant = 'default',
}: {
  children: ReactNode
  variant?: Variant
})
{
  const cls =
    variant === 'online'
      ? 'badge badge--online'
      : variant === 'soon'
        ? 'badge badge--soon'
        : 'badge'
  return <span className={cls}>{children}</span>
}
