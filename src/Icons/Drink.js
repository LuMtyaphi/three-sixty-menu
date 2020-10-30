import * as React from "react"

function DRINK(props) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M7.46 12h9.08L15 22H9L7.46 12zM7.46 12h9.08L17 9H7l.46 3zM12 6l.9-3.62a.5.5 0 01.53-.38l4.07.5M6 6h12"
        stroke="#fff"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default DRINK
