import React from 'react'

const Button = ({text, fill, type, classNames}:{text: string, fill?: boolean, type: "submit" | "button", classNames?: string}) => {
  return (
    <button type={type} className={`rounded-md px-4 py-2 cursor-pointer  ${classNames} ${fill ? "text-white bg-primary" : "border border-[#E0DEF7]"}`}>
        {text}
    </button>
  )
}

export default Button