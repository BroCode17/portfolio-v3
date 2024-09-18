import { cn } from '@/lib/utils'
import React from 'react'

const Card = ({children, className, id}: {children: React.ReactNode, className?: string, id?: string}) => {
  return (
    <div className={cn(`custom-border border-l-0 border-r-0 overflow-hidden  space-y-4 backdrop-blur-sm pb-4`, className)} id={id}>{children}</div>
  )
}

export default Card