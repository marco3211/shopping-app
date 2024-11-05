import React from 'react'
import { useSelector } from 'react-redux'
import ListCard from '../components/ListCard'

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

export default ListsPage
