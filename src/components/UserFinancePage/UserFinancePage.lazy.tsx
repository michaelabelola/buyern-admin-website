import React, { lazy, Suspense } from 'react';

const LazyUserFinancePage = lazy(() => import('./UserFinancePage'));

const UserFinancePage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyUserFinancePage {...props} />
  </Suspense>
);

export default UserFinancePage;
