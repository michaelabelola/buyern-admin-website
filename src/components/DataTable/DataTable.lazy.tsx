import React, { lazy, Suspense } from 'react';

const LazyDataTable = lazy(() => import('./DataTable'));

const DataTable = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyDataTable {...props} />
  </Suspense>
);

export default DataTable;
