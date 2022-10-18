import React, {lazy, Suspense} from 'react';
import {PageHeaderProps} from "./PageHeader";

const LazyPageHeader = lazy(() => import('./PageHeader'));

const PageHeader = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; } & PageHeaderProps) => (
    <Suspense fallback={null}>
        <LazyPageHeader {...props} />
    </Suspense>
);

export default PageHeader;
