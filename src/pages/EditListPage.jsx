import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateListInDB } from '../utils/indexedDB'
import { updateList } from '../redux/actions'
import { Button, Label, TextInput } from 'flowbite-react'

const EditListPage = () => {
  const { listName } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const lists = useSelector(state => state.lists)
  const [list, setList] = useState(null)
  const [item, setItem] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const existingList = lists.find(l => l.name === listName)
    if (existingList) {
      setList(existingList)
    } else {
      setError('List not found.')
    }
  }, [listName, lists])

  const handleAddItem = () => {
    if (item.trim()) {
      setList({ ...list, items: [...list.items, item] })
      setItem('')
      setError('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!list.name.trim()) {
      setError('Please enter a list name.')
      return
    }

    if (list.items.length === 0) {
      setError('Add items to your list first.')
      return
    }

    const originalName = listName 
    dispatch(updateList(list))
    await updateListInDB(originalName, list) 

    navigate('/')
  }

  const handleCancel = () => navigate('/')

  return (
    <div className="flex-1 w-1/3 mx-auto justify-middle">
      <div className="flex flex-col space-y-4">
        <h1 className="text-center text-xl">Edit List</h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {list && (
          <form className="flex flex-col border-2 border-gray-300 rounded-lg p-4 space-y-2" onSubmit={handleSubmit}>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="listName" value="List Name" />
              </div>
              <TextInput
                id="listName"
                type="text"
                value={list.name}
                onChange={(e) => {
                  setList({ ...list, name: e.target.value })
                  setError('')
                }}
                placeholder="Enter list name"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="item" value="Item" />
              </div>
              <TextInput
                id="item"
                type="text"
                value={item}
                onChange={(e) => setItem(e.target.value)}
                placeholder="Enter item"
              />
            </div>
            <ul className="text-center bg-gray-100 border-2 border-gray-300 rounded-lg p-4 my-4">
              {list.items.length === 0 ? (
                <li className="text-gray-500">You have no items yet!</li>
              ) : (
                list.items.map((item, index) => (
                  <li key={index} className="text-gray-700">
                    {item}
                  </li>
                ))
              )}
            </ul>
            <div className="flex flex-row justify-between">
              <Button
                color="light"
                disabled={!item.trim()}
                onClick={handleAddItem}
                type="button"
                className="w-1/3"
              >
                Add Item
              </Button>
              <Button
                color="success"
                type="submit"
                className="w-1/3"
              >
                Save Changes
              </Button>
            </div>
          </form>
        )}
        <Button
          onClick={handleCancel}
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Cancel
        </Button>
      </div>
    </div>
  )
}

export default EditListPage