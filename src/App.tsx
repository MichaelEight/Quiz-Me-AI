import { Routes, Route, NavLink } from 'react-router-dom'
import SettingsPage from './SettingsPage'
import InputPage from './InputPage'
import QuizPage from './QuizPage'
import './App.css'

function App() {
  return (
    <>
      <h1>Quiz Me AI</h1>

      <div>
      <NavLink to="/" end>Settings</NavLink>
      <NavLink to="input" end>Input</NavLink>
      <NavLink to="quiz" end>Quiz</NavLink>
      </div>
      
      <Routes>
        <Route index element={<SettingsPage />} />
        <Route path='input' element={<InputPage />} />
        <Route path='quiz' element={<QuizPage />} />
      </Routes>
    </>
  )
}

export default App
