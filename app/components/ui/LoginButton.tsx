import React from 'react'
type ButtonProps = {
    children: React.ReactNode
    onClick?: () => void
}
export function LoginButton({children, onClick}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-yellow-400 text-black rounded-md"
    >
      {children}
      </button>
  )
}
