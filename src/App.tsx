import { useState } from 'react'
import './App.css'
import { settingsStore } from './store'
import SettingsPage from './SettingsPage'
import InputPage from './InputPage'
import QuizPage from './QuizPage'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <h1>TEXT</h1>
      <Routes>
        <Route index element={<SettingsPage />} />
        <Route path='input' element={<InputPage />} />
        <Route path='quiz' element={<QuizPage />} />
      </Routes>
    </>
  )
}

export default App
