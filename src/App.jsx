import { useState } from "react"
import { GoBell, GoDownload, GoDatabase } from "react-icons/go"
import Button from "./Button"
function App() {
  const handleClick = () => {
    console.log("click")
  }
  return (
    <>
      <div>
        <Button primary onClick={handleClick}>
          <GoBell />
          Hello
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoDownload />
          Hello
        </Button>
      </div>
      <div>
        <Button success>
          <GoDatabase />
          Hello
        </Button>
      </div>
      <div>
        <Button warning>Hello</Button>
      </div>
      <div>
        <Button danger>Hello</Button>
      </div>
    </>
  )
}

export default App
