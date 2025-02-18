import { useState } from 'react'
import './App.css'
import { settingsStore } from './store'
import SettingsPage from './SettingsPage'
import InputPage from './InputPage'
import QuizPage from './QuizPage'
import { Routes, Route, NavLink } from 'react-router-dom'

function App() {
  return (
    <>
      <h1>Quiz Me AI</h1>

      <NavLink to="/" end>Settings</NavLink>
      <NavLink to="input" end>Input</NavLink>
      <NavLink to="quiz" end>Quiz</NavLink>
      
      <Routes>
        <Route index element={<SettingsPage />} />
        <Route path='input' element={<InputPage />} />
        <Route path='quiz' element={<QuizPage />} />
      </Routes>
    </>
  )
}

export default App
