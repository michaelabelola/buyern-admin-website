import React, { lazy, Suspense } from 'react';
import {StatusModalProps} from "./StatusModal";

const LazyStatusModal = lazy(() => import('./StatusModal'));

const StatusModal = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; } & StatusModalProps) => (
  <Suspense fallback={null}>
    <LazyStatusModal {...props} />
  </Suspense>
);

export default StatusModal;
