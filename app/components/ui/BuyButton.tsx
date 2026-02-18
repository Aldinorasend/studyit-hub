import React, { Children } from 'react'
type ButtonProps = {
    children: React.ReactNode,
    onClick? : ()=>void
}
export default function BuyButton({children, onClick}:ButtonProps) {
  return (
    <button onClick={onClick}>
        {children}
    </button>
  )
}
