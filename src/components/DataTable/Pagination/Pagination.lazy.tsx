import React, {lazy, Suspense} from 'react';
import {PaginationProps} from "./Pagination";

const LazyPagination = lazy(() => import('./Pagination'));

const Pagination = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; } & PaginationProps) => (
    <Suspense fallback={null}>
        <LazyPagination {...props} />
    </Suspense>
);

export default Pagination;
