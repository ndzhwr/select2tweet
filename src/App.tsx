import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Tweetable from './Tweetable'

function App() {
  return (
    <Tweetable>
      <div className="App">
        <h1>The flutter code fox</h1>
        <p>The CommonMark specification brings order to and clarifies the Markdown syntax cases left ambiguous or unclear in the Gruber document. GitHub Flavored Markdown (GFM) is a strict superset of CommonMark used by GitHub.</p>
      </div>
    </Tweetable>
  )
}

export default App
