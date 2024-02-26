import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const toDoList = [
    {
        id: 1,
        title: "Complete assigment",
    },
    {
        id: 2,
        title: "Create project",
    },
    {
        id: 3,
        title: "Complete onboarding",
    },
]


function App() {

  return (
    <>
      <div>
        <ul>
            {toDoList.map(function(item){
                return <li key = {item.id}>{item.title}</li>
            })}
        </ul>
      </div>

    </>
  )
}

export default App
