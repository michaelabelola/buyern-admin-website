import React, { lazy, Suspense } from 'react';

const LazyUserSettingsPage = lazy(() => import('./UserSettingsPage'));

const UserSettingsPage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyUserSettingsPage {...props} />
  </Suspense>
);

export default UserSettingsPage;
