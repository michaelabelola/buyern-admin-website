import React, { lazy, Suspense } from 'react';
import {TabViewProps} from "./TabView";

const LazyTabView = lazy(() => import('./TabView'));

const TabView = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; } & TabViewProps) => (
  <Suspense fallback={null}>
    <LazyTabView {...props} />
  </Suspense>
);

export default TabView;
