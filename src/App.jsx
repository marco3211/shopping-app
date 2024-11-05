import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Header from './components/Header'
import Home from './components/Home'
import ListsPage from './components/ListsPage'
import CreateListPage from './components/CreateListPage'
import CreateAccountPage from './components/CreateAccountPage'
import { loadLists } from './redux/actions'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadLists())
  }, [dispatch])

  return (
    <Router>
      <div className="container mx-auto max-w-7xl space-y-14">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lists" element={<ListsPage />} />
          <Route path="/create-list" element={<CreateListPage />} />
          <Route path="/create-account" element={<CreateAccountPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
