import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Button } from 'flowbite-react'

const FullListPage = () => {
  const { listName } = useParams()
  const lists = useSelector(state => state.lists)
  const [list, setList] = useState(null)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const existingList = lists.find(l => l.name === listName)
    if (existingList) {
      setList(existingList)
    } else {
      setError('List not found.')
    }
  }, [listName, lists]) 

  const handleBack = () => navigate('/')

  return (
    <div className="flex-1 w-1/3 mx-auto justify-middle">
      <div className="flex flex-col space-y-4">
        <h1 className="text-center text-xl">Full List: {listName}</h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {list && (
          <ul className="text-center bg-gray-100 border-2 border-gray-300 rounded-lg p-4 my-4">
            {list.items.length === 0 ? (
              <li className="text-gray-500">This list has no items.</li>
            ) : (
              list.items.map((item, index) => (
                <li key={index} className="text-gray-700">
                  {item}
                </li>
              ))
            )}
          </ul>
        )}
        <Button
          onClick={handleBack}
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Back
        </Button>
      </div>
    </div>
  )
}

export default FullListPage