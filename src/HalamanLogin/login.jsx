import React, { useState } from 'react'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    console.log(`Username: ${username}, Password: ${password}`)
  }

  return (
    <form onSubmit={handleLogin} className="flex flex-col space-y-4">
      <label htmlFor="username" className="text-lg font-semibold">
        Username:
      </label>
      <input
        type="text"
        name="username"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border border-gray-400 rounded-sm p-2"
      />
      <label htmlFor="password" className="text-lg font-semibold">
        Password:
      </label>
      <input
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border border-gray-400 rounded-sm p-2"
      />
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        Login
      </button>
    </form>
  )
}