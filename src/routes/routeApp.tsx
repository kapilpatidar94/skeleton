import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { paths } from '../configs/constants';

import AuthLayout from '../components/layouts/authLayout';
import MainLayout from '../components/layouts/mainLayout';
import Layout1 from '../components/layouts/childLayout/layout1';
import Layout3 from '../components/layouts/childLayout/layout3';




const Home = lazy(() => import('../pages/home'));
const Layout1Page = lazy(() => import('../pages/layout1Pages'));
const Layout3Page = lazy(() => import('../pages/layout3Pages'));
const Dashboard   = lazy(() => import('../pages/layout3Pages/dashboard'));
const Analytics   = lazy(() => import('../pages/layout3Pages/analytics'));
const Revenue   = lazy(() => import('../pages/layout3Pages/revenue'));
const Wallet   = lazy(() => import('../pages/layout3Pages/wallet'));
const Notification   = lazy(() => import('../pages/layout3Pages/notification'));

const AuthHome = lazy(() => import('../pages/auth'));

function RouteApp() {
    return (<>
        <Routes>
            <Route path={paths.auth.home} element={<AuthLayout />}>
                <Route index element={<Suspense fallback={""}><AuthHome /></Suspense>} />
            </Route>
            <Route path={paths.home} element={<MainLayout />}>
                <Route index element={<Suspense fallback={""}><Home /></Suspense>} />
            </Route>
            {/* Layout 1 Pages */}
            <Route path={paths.layout1} element={<Layout1 />}>
                <Route index element={<Suspense fallback={""}><Layout1Page /></Suspense>} />
            </Route>
            {/* Layout 3 Pages */}
            <Route path={paths.layout3.home} element={<Layout3 />}>
                <Route index element={<Suspense fallback={""}><Dashboard /></Suspense>} />
                <Route path={paths.layout3.dashboard} element={<Suspense fallback={""}><Dashboard /></Suspense>} />
                <Route path={paths.layout3.analytics} element={<Suspense fallback={""}><Analytics /></Suspense>} />
                <Route path={paths.layout3.revenue} element={<Suspense fallback={""}><Revenue /></Suspense>} />
                <Route path={paths.layout3.wallet} element={<Suspense fallback={""}><Wallet /></Suspense>} />
                <Route path={paths.layout3.notification} element={<Suspense fallback={""}><Notification /></Suspense>} />
            </Route>
        </Routes>
    </>);
}

export default RouteApp;