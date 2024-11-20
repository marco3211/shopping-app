import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Header from './components/Header'
import Home from './pages/Home'
import ListsPage from './pages/ListsPage'
import CreateListPage from './pages/CreateListPage'
import CreateAccountPage from './pages/CreateAccountPage'
import FullListPage from './pages/FullListPage' 
import EditListPage from './pages/EditListPage'
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
          <Route path="/list/:listName" element={<FullListPage />} /> 
          <Route path="/edit/:listName" element={<EditListPage />} /> 
        </Routes>
      </div>
    </Router>
  )
}

export default App