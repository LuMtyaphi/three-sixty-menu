import * as React from "react"
function PASTA(props) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M16 10.928L20 4"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 11c0-1.463 1-1.463 1-3.037C6 6.5 5 6.5 5 5.037 5 3.575 6 3.462 6 2M8 11c0-1.463 1-1.463 1-3.037C9 6.5 8 6.5 8 5.037 8 3.575 9 3.462 9 2"
        stroke="#fff"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 11h20v2a7 7 0 01-7 7v2H9v-2a7 7 0 01-7-7v-2z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export default PASTA
