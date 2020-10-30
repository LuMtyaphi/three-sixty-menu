import * as React from "react"

function PANINI(props) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M2 20h20M2 17h20M22 14H2l7-6 13 6zM19.07 4l-1.48 1.48M15.48 7.59L12 11.07"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 8a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
        stroke="#fff"
        strokeWidth={2}
      />
    </svg>
  )
}

export default PANINI
