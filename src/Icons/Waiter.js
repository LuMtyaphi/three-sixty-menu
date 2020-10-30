import * as React from "react"

function Waiter(props) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M14.5 3h-5v1h5V3zM12.5 7V4h-1v3h1z"
        stroke="#fff"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 18H3v-2a9 9 0 0118 0v2zM22 18H2v3h20v-3z"
        stroke="#fff"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Waiter
