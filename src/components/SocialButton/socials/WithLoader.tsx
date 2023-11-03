import type { FC, PropsWithChildren } from 'react';

import { Loader } from '@/components/Loader';

export const WithLoader: FC<PropsWithChildren<{ loading: boolean }>> = ({
  loading,
  children,
}) =>
  loading ? (
    <Loader shape="circle" size="small" appearance="greyscale" />
  ) : (
    children
  );
