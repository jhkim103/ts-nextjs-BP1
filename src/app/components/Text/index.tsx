'use client';

import { Typography } from 'antd';
import { PropsWithChildren } from 'react';
import AntdStyleProviderLayout from '../AntdStyleProviderLayout';

export default function Text(props: PropsWithChildren) {
  return (
    <AntdStyleProviderLayout>
      <Typography>{props.children}</Typography>
    </AntdStyleProviderLayout>
  );
}