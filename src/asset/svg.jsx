import * as React from "react"

export const SearchIcon = (props) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="none"
    className={props.className}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16.672 16.641 21 21m-2-10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
    />
  </svg>

)

export const RecipesIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={800}
    height={800}
    viewBox="0 0 32 32"
    className={props.className}
    {...props}
  >
    <path d="M3 22h26c.6 0 1-.4 1-1s-.4-1-1-1h-1c-.2-5.7-4.1-10.4-9.3-11.7.2-.4.3-.8.3-1.3 0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .5.1.9.3 1.3C8.1 9.6 4.2 14.3 4 20H3c-.6 0-1 .4-1 1s.4 1 1 1zM5.5 24l.8 1.5c.1.3.5.5.9.5h17.7c.4 0 .7-.2.9-.5l.8-1.5H5.5z" />
  </svg>
)

export const HomeIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    className={props.className}
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="m21.71 10.29-9-9a1 1 0 0 0-1.42 0l-9 9a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 12h1v9a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-9h1a1 1 0 0 0 .92-.62 1 1 0 0 0-.21-1.09Z" />
  </svg>
)
