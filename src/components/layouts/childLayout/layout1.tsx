import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './layout1/sidebar';

export default function Layout1() {
    return (
        <div className="d-flex vh-100">
            <Suspense fallback={null}>
                {/* <HeaderNavBar toggleSidebarUpdates={() => _setToggleSidebar(!_toggleSidebar)} initialState={_toggleSidebar} isMobile={_isMobile} /> */}
                <SideBar />
            </Suspense>
            <main className="flex-grow-1">
                <Outlet />
            </main>
        </div>
    )
}
