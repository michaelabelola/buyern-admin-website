import React, {lazy, Suspense} from 'react';
import {DataTableProps} from "./DataTable";

const LazyDataTable = lazy(() => import('./DataTable'));

const DataTable = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; } & DataTableProps<any>) => (
    <Suspense fallback={null}>
        <LazyDataTable {...props} />
    </Suspense>
);

export default DataTable;
