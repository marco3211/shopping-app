import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Navbar } from 'flowbite-react'

const Header = () => {
  const location = useLocation()

  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} to="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Shopping List
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link
          as={Link}
          to="/"
          className={location.pathname === '/' ? 'navbar-link-active' : ''}
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to="/lists"
          className={location.pathname === '/lists' ? 'navbar-link-active' : ''}
        >
          Lists
        </Navbar.Link>
        <Navbar.Link
          as={Link}
          to="/create-account"
          className={location.pathname === '/create-account' ? 'navbar-link-active' : ''}
        >
          Create Account
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header