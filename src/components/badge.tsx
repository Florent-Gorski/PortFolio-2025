import { ReactNode } from 'react'

export default function Badge({ children }: { children: ReactNode }) {
  return <span className="badge bg-white/80 dark:bg-neutral-900/60">{children}</span>
}
