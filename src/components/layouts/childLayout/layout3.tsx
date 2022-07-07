import React, { Suspense } from 'react';
import SideBar from './layout3/sidebar';

export default function Layout3() {
  return (<>
    <Suspense fallback={null}>
      <SideBar />
    </Suspense>
  </>
  )
}
