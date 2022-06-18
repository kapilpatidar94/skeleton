import React, { Suspense, useState } from 'react';
import { Link, Outlet, Route } from 'react-router-dom';
import SideBar from './layout3/sidebar';
import style from './layout3/style.module.scss';

export default function Layout3() {
  return (
    <div className="d-flex vh-100">
      <Suspense fallback={null}>
        <SideBar />
      </Suspense>
      <main className="flex-grow-1 bg-light">
        <Outlet />
      </main>
    </div>
  )
}
