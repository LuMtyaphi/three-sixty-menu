import * as React from "react"

function STARTER(props) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M2 11l20 2v8H2V11z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 3a8 8 0 00-8 8l20 2L10 3z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 17a1 1 0 100-2 1 1 0 000 2zM13 21a1 1 0 100-2 1 1 0 000 2zM12 14a1 1 0 100-2 1 1 0 000 2zM20 17a2 2 0 100-4 2 2 0 000 4z"
        stroke="#fff"
        strokeWidth={2}
      />
    </svg>
  )
}

export default STARTER
