import * as React from "react"

function PIZZA(props) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
        stroke="#fff"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="square"
      />
      <path
        d="M12 2v20M22 12H2M12 22V12h10c0 5.52-4.48 10-10 10z"
        stroke="#fff"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
      <path
        d="M16 17a1 1 0 100-2 1 1 0 000 2zM8 9a1 1 0 100-2 1 1 0 000 2z"
        stroke="#fff"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <path
        d="M6.5 14.5l3 3M15 6l3 3"
        stroke="#fff"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default PIZZA
