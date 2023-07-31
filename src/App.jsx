import { useState } from 'react'
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
