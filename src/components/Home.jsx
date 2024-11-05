import React from 'react'
import CreateListCard from './CreateListCard'
import ListCard from './ListCard'

const Home = () => {
  return (
    <div className="flex justify-left">
      <CreateListCard />
      <ListCard />
    </div>
  )
}

export default Home
