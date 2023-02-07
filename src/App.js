import React from 'react'
import { Link } from 'react-router-dom'
import { AppRouter } from './Components/AppRouter/AppRouter'

export default function App() {
  return (
    <>
    <Link to="/brandlist"><h2>Brand List</h2></Link>
    <AppRouter/>
    </>
  )
}
