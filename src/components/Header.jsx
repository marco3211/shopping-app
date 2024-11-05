import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center h-16">
      <div><h1 className="text-3xl font-bold text-left text-blue-500">Shopping List</h1></div>
      <nav>
        <ul className="flex flex-row space-x-6 items-center">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/lists">Lists</Link></li>
          <li><Link to="/create-account">Create Account</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
