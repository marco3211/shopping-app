import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Link, Routes, Route, useNavigate } from 'react-router-dom'

import { addListToDB, getListsFromDB, deleteListFromDB } from './indexedDB'

const initialState = {
  lists: []
}

export const loadLists = () => async (dispatch) => {
  try {
    const lists = await getListsFromDB()
    console.log(lists)
    if (lists) {
      lists.forEach(list => {
        dispatch({ type: 'ADD_LIST', payload: list })
      })
    }
  } catch (error) {
    console.error('Failed to load lists from IndexedDB:', error)
  }
}

// Root reducer to handle actions related to lists
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // Add a new list to the state
    case 'ADD_LIST':
      return {
        ...state,
        lists: [...state.lists, action.payload]
      }
    // Remove a list from the state by index
    case 'DELETE_LIST':
      return {
        ...state,
        lists: state.lists.filter((_, index) => index !== action.payload)
      }
    default:
      return state
  }
}

// Header component with navigation links
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

// Component to navigate to the Create List page
const CreateListCard = () => {
  return (
    <Link to="/create-list" className="mx-4 ml-0">
      <div className="border-dotted border-2 border-indigo-600 h-40 w-60 flex justify-center items-center">
        <p>Create List</p>
      </div>
    </Link>
  )
}

// Component to display each list with delete functionality
const ListCard = () => {
  const lists = useSelector(state => state.lists)
  const dispatch = useDispatch()

  // Function to handle list deletion
  const handleDelete = async (index) => {
    const listName = lists[index].name
    dispatch({ type: 'DELETE_LIST', payload: index })
    await deleteListFromDB(listName) // Delete from IndexedDB
  }

  return (
    <>
      {lists.map((list, index) => (
        <div
          key={index}
          className={`relative border-solid border-2 border-indigo-600 h-40 w-60 flex flex-col justify-center items-center mx-2 ${index === 0 ? 'ml-0' : ''}`}
        >
          <button
            onClick={() => handleDelete(index)}
            className="absolute top-0 right-0 mt-2 mr-2 text-red-500"
          >
            X
          </button>
          <h3 className="text-lg font-bold">{list.name}</h3>
          <ul className="text-center">
            {list.items.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}

// Home component displaying the Create List card and existing lists
const Home = () => {
  return (
    <div className="flex justify-left">
      <CreateListCard />
      <ListCard />
    </div>
  )
}

// Component for creating a new list
const CreateListPage = () => {
  const [listName, setListName] = useState('')
  const [item, setItem] = useState('')
  const [items, setItems] = useState([])
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const lists = useSelector(state => state.lists)

  // Function to add an item to the list
  const handleAddItem = () => {
    if (item.trim()) {
      setItems([...items, item])
      setItem('')
      setError('')
    }
  }

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    // Check if the list name is empty
    if (!listName.trim()) {
      setError('Please enter a list name.')
      return
    }

    // Check if there are no items in the list
    if (items.length === 0) {
      setError('Add items to your cart first.')
      return
    }

    // Check if the list name already exists
    const listExists = lists.some(list => list.name === listName.trim())
    if (listExists) {
      setError('List name already exists. Please choose a different name.')
      return
    }

    // Create a new list and dispatch the action
    const newList = { name: listName, items }
    dispatch({ type: 'ADD_LIST', payload: newList })
    await addListToDB(newList) // Save to IndexedDB

    // Reset form fields and error state
    setListName('')
    setItems([])
    setError('')
    navigate('/')
  }

  // Function to cancel list creation and navigate back
  const handleCancelItem = () => navigate('/')

  return (
    <div className="flex-1 w-1/3 mx-auto justify-middle">
      <div className="flex flex-col space-y-4">
        <h1 className="text-center">Create List</h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form className="flex flex-col border-2 border-gray-300 rounded-lg p-4 space-y-2" onSubmit={handleSubmit}>
          <input
            className="text-center"
            type="text"
            value={listName}
            onChange={(e) => {
              setListName(e.target.value)
              setError('') // Reset error when user starts typing
            }}
            placeholder="Enter list name"
          />
          <input
            className="text-center"
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            placeholder="Enter item"
          />
          <ul className="text-center bg-sky-300 border-2 rounded-lg">
            {items.length === 0 ? 'You have no items yet!' : items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div className="flex flex-row justify-between">
            <button
              disabled={!item.trim()}
              onClick={handleAddItem}
              type="button"
              className="px-3 py-2 w-1/3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add Item
            </button>
            <button
              type="submit"
              className="px-3 py-2 w-1/3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Create List
            </button>
          </div>
        </form>
        <button
          onClick={handleCancelItem}
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

// Component to display all lists or a message if no lists exist
const ListsPage = () => {
  const lists = useSelector(state => state.lists)

  return (
    <>
      {lists.length !== 0 ? (
        <div className="flex justify-left">
          <ListCard />
        </div>
      ) : (
        <h1 className="text-center text-3xl font-bold">Oops you have no lists!</h1>
      )}
    </>
  )
}

// Placeholder component for account creation page
const CreateAccountPage = () => <div>Create Account Page</div>

// Main App component with routing
const App = () => {
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
