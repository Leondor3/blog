import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Posts from './components/posts'
import viteLogo from '/vite.svg'


function App() {
const name: string = 'Telleca Developer'
const [count, setCount] = useState(0)

  return (
    <div className="w-full max-w-[1344px] mx-auto h-screen">
      <Posts />
    </div>
  )
}

export default App
