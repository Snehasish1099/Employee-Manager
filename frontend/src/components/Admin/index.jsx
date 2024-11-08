import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNavbar from './SideNavbar'

const AdminIndex = () => {
    return (
        <div>
            {/* <LandingHeader
                landingRoot={`fixed top-0 z-50`}
                searchBar={true}
                goTomessage={true}
                goToNotification={true}
                border={true}
                profile={true}
                handleclickNotification={handleshow}
                showNotification={showNotification}
                allnotification={allnotification}
                detailsPage={detailsPage}
                readNotificationApi={readNotificationApi}
                getNotification={getNotification}
            /> */}
            <div className={`w-full flex h-screen`}>
                <div className={`w-[10%] bg-white`}>
                    <SideNavbar />
                </div>
                <div className='w-[90%] bg-gray-100'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AdminIndex