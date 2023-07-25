import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/Home'
import { HomeContextProvider } from './context/HomeContext'
function App() {

  return (
    <>
    <HomeContextProvider>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
    </HomeContextProvider>
    </>
  )
}

export default App
