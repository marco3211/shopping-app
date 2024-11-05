import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'flowbite-react'

const CreateListCard = () => {
  return (
    <Link to="/create-list">
      <Card className="flex items-center justify-center border-2 border-dashed border-indigo-600 h-full">
        <p className="text-xl font-bold text-center">Create List</p>
      </Card>
    </Link>
  )
}

export default CreateListCard