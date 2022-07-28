import React from 'react'
import { useSelector } from 'react-redux'

export const Profile = () => {
  // useSelector -> is a hook from redux, used to get the current State!
  const user = useSelector((state) => state.user.value)

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}
