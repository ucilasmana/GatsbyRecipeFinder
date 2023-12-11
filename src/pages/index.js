import * as React from "react"
import "../styles/global.css"
import Header from "../components/Header"
import Main from "../components/Main"

const IndexPage = () => {
  return (
    <>
    <div className="w-full h-full flex flex-col">
      <Header/>
      <Main/>
      </div>
    </>
    

  )
}

export default IndexPage

export const Head = () => <title>Recipe Finder App</title>
