import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteListFromDB } from '../utils/indexedDB'

const ListCard = () => {
  const lists = useSelector(state => state.lists)
  const dispatch = useDispatch()

  const handleDelete = async (index) => {
    const listName = lists[index].name
    dispatch({ type: 'DELETE_LIST', payload: index })
    await deleteListFromDB(listName)
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

export default ListCard
