import React, { lazy, Suspense } from 'react';

const LazySideNavigationView = lazy(() => import('./SideNavigationView'));

const SideNavigationView = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySideNavigationView {...props} />
  </Suspense>
);

export default SideNavigationView;
