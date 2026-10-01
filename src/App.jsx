// component ที่แนะนำจะเรียกว่าเป็น functional component
// แบบที่1 ใช้ snippet: rfc ***

// import React from 'react'

// export default function App() {
//   return (
//     <div>App wow</div>
//   )
// }
//---------------------------------------
// แบบที่2 ใช้ snippet: rfce
// import React from 'react'

// function App() {
//   return (
//     <div>App EX.2</div>
//   )
// }

// export default App
//---------------------------------------
// แบบที่3 ใช้ snippet: rafce
import React from 'react'
import Hello from './Hello.jsx'
import Hi from './Hi.jsx'

const App = () => {
  return (
    <div>
      App EX.3
      <Hello/>
      <Hi/>
      <Hi/>
      <Hi/>
      <Hi/>
      </div>
  )
}

export default App

