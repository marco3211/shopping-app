import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ListCard from '../components/ListCard'
import { getListsFromDB } from '../utils/indexedDB'

const ListsPage = () => {
  const lists = useSelector(state => state.lists)

  return (
    <>
      {lists.length !== 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {lists.map((list, index) => (
            <ListCard key={index} list={list} />
          ))}
        </div>
      ) : (
        <h1 className="text-center text-3xl font-bold">Oops you have no lists!</h1>
      )}
    </>
  )
}

export default ListsPage