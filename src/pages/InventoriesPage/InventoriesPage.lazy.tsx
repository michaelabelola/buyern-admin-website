import React, { lazy, Suspense } from 'react';

const LazyInventoriesPage = lazy(() => import('./InventoriesPage'));

const InventoriesPage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyInventoriesPage {...props} />
  </Suspense>
);

export default InventoriesPage;
