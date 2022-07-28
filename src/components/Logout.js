import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../features/userSlice';
export const Logout = () => {

    const dispatch = useDispatch();

  return (
        <button onClick={() => dispatch(logoutUser())}>Logout</button>
  )
}
