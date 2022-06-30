import React, { Suspense } from 'react';
import SideBar from './layout3/sidebar';

export default function Layout3() {
  return (
    <div className="d-flex vh-100">
      <Suspense fallback={null}>
        <SideBar />
      </Suspense>
    </div>
  )
}
