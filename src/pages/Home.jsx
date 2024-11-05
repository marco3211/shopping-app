import React from 'react'
import CreateListCard from '../components/CreateListCard'
import ListCard from '../components/ListCard'
import { useSelector } from 'react-redux'

const Home = () => {
  const lists = useSelector(state => state.lists)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <CreateListCard />
      {lists.map((list, index) => (
        <ListCard key={index} list={list} />
      ))}
    </div>
  )
}

export default Home