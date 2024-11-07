import React from 'react'

const AdminDashboard = () => {

  const userName = localStorage.getItem("name")

  return (
    <div className='h-screen flex justify-center items-center'>
      {`Welcome to Admin Dashboard, Mr. ${userName}`}
    </div>
  )
}

export default AdminDashboard