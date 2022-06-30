import React, { Suspense, useState } from 'react';
import { Link, Outlet, Route } from 'react-router-dom';
import SideBar from './layout4/sidebar';
import style from './layout4/style.module.scss';

export default function Layout2() {
    const [inactive, setInactive] = useState<any>(false);
    return (
        <div className="d-flex vh-100">
            <Suspense fallback={null}>
                <SideBar onCollapse={(flag: any) => setInactive(flag)} />
            </Suspense>
            <main className="flex-grow-1 bg-light">
                <Outlet />
            </main>
        </div>
    )
}