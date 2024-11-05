import React from 'react'
import CreateListCard from '../components/CreateListCard'
import ListCard from '../components/ListCard'

const Home = () => {
  return (
    <div className="flex justify-left">
      <CreateListCard />
      <ListCard />
    </div>
  )
}

export default Home
