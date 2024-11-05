import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addListToDB } from '../utils/indexedDB'

const CreateListPage = () => {
  const [listName, setListName] = useState('')
  const [item, setItem] = useState('')
  const [items, setItems] = useState([])
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const lists = useSelector(state => state.lists)

  const handleAddItem = () => {
    if (item.trim()) {
      setItems([...items, item])
      setItem('')
      setError('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!listName.trim()) {
      setError('Please enter a list name.')
      return
    }

    if (items.length === 0) {
      setError('Add items to your cart first.')
      return
    }

    const listExists = lists.some(list => list.name === listName.trim())
    if (listExists) {
      setError('List name already exists. Please choose a different name.')
      return
    }

    const newList = { name: listName, items }
    dispatch({ type: 'ADD_LIST', payload: newList })
    await addListToDB(newList)

    setListName('')
    setItems([])
    setError('')
    navigate('/')
  }

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
              setError('')
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

export default CreateListPage
