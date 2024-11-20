import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteListFromDB } from '../utils/indexedDB'
import { deleteList } from '../redux/actions'
import { Card } from 'flowbite-react'

const ListCard = ({ list }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isHovered, setIsHovered] = useState(false)
  const lists = useSelector(state => state.lists)

  useEffect(() => { }, [lists])

  const handleDelete = async () => {
    await deleteListFromDB(list.name) 
    dispatch(deleteList(list.name)) 
  }

  const handleViewMore = () => {
    navigate(`/list/${list.name}`)
  }

  const handleEditList = () => {
    navigate(`/edit/${list.name}`)
  }

  // Check if the list exists in the Redux store
  const listExists = lists.some(l => l.name === list.name)

  // If the list doesn't exist, don't render the component
  if (!listExists) {
    return null
  }

  return (
    <Card
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        onClick={handleDelete}
        className="absolute top-0 right-0 mt-2 mr-2 text-red-500 z-10"
      >
        X
      </button>
      <div className="mb-4 flex items-center justify-between">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          {list.name}
        </h5>
      </div>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {list.items.slice(0, 3).map((item, itemIndex) => (
            <li key={itemIndex} className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                    {item}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {isHovered && (
        <div className="absolute bottom-0 left-0 right-0 flex justify-between p-2 bg-gray-100 dark:bg-gray-800">
          <button className="text-blue-500" onClick={handleEditList}>
            Edit List
          </button>
          <button className="text-blue-500" onClick={handleViewMore}>
            View More
          </button>
        </div>
      )}
    </Card>
  )
}

export default ListCard