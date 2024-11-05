import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteListFromDB } from '../utils/indexedDB'
import { Card } from 'flowbite-react'

const ListCard = ({ list }) => {
  const dispatch = useDispatch()

  const handleDelete = async () => {
    dispatch({ type: 'DELETE_LIST', payload: list.name })
    await deleteListFromDB(list.name)
  }

  return (
    <Card className="relative">
      <button
        onClick={handleDelete}
        className="absolute top-0 right-0 mt-2 mr-2 text-red-500"
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
          {list.items.map((item, itemIndex) => (
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
    </Card>
  )
}

export default ListCard