import React from 'react'

const UserLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
    <div className='text-red-500 text-3xl'>UserLayout</div>
    {children}
    </>
  )
}

export default UserLayout