import React, { useState } from 'react'

const CreateAccountPage = () => {
  // State for form inputs
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()

    // Basic validation
    if (!username.trim() || !email.trim() || !password.trim()) {
      setError('All fields are required.')
      return
    }

    // Simulate account creation
    setSuccess('Account created successfully!')
    setError('')
    setUsername('')
    setEmail('')
    setPassword('')
  }

  return (
    <div className="flex-1 w-1/3 mx-auto justify-middle">
      <div className="flex flex-col space-y-4">
        <h1 className="text-center">Create Account</h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">{success}</p>}
        <form className="flex flex-col border-2 border-gray-300 rounded-lg p-4 space-y-2" onSubmit={handleSubmit}>
          <input
            className="text-center"
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value)
              setError('')
            }}
            placeholder="Enter username"
          />
          <input
            className="text-center"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              setError('')
            }}
            placeholder="Enter email"
          />
          <input
            className="text-center"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              setError('')
            }}
            placeholder="Enter password"
          />
          <button
            type="submit"
            className="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateAccountPage