import React, { lazy, Suspense } from 'react';

const LazyUserDashboard = lazy(() => import('./UserDashboard'));

const UserDashboard = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyUserDashboard {...props} />
  </Suspense>
);

export default UserDashboard;
