import React from 'react'
import { Link } from 'react-router-dom'

const CreateListCard = () => {
  return (
    <Link to="/create-list" className="mx-4 ml-0">
      <div className="border-dotted border-2 border-indigo-600 h-40 w-60 flex justify-center items-center">
        <p>Create List</p>
      </div>
    </Link>
  )
}

export default CreateListCard
