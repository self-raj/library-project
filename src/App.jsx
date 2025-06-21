import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import Category from './Component/Category'
import Footer from './Component/footer'
import Popular from './Component/Popular'

function App() {
  const [books, setBooks] = useState([
    {
      title: "The Midnight Library",
      author: "Matt Haig",
      genre: "Fiction",
      rating: 4.8,
      description: "Between life and death there is a library...",
    }
  ]);

  return (
    <div>
      <Navbar />
      <Home />
      <Category />
      <Popular />
      
      <Footer />
    </div>
  )
}

export default App
