import './App.css'
import axios from 'axios'
import React from 'react'

const baseUrl = 'https://bookish-space-guide-w4jx979jj9gf9qxg-9000.app.github.dev/'

const App = () => {
  const handleClick = async () => {
    try {
      const { data } = await axios.post(`${baseUrl}server`, {
        test: "Test message",
        num: 200
      })
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>App
      <button onClick={handleClick}>Request</button>
    </div>
  )
}

export default App