import React, { lazy, Suspense } from 'react';

const LazyEntitiesGalleryPage = lazy(() => import('./EntitiesGalleryPage'));

const EntitiesGalleryPage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyEntitiesGalleryPage {...props} />
  </Suspense>
);

export default EntitiesGalleryPage;
