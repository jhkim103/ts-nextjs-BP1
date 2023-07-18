'use client';

import { Button as AButton, ButtonProps } from 'antd';
import { ReactNode } from 'react';
import { styled } from 'styled-components';
import AntdStyleProviderLayout from '../AntdStyleProvider';
import StyledComponentsRegistry from '../StyledComponentsRegistry';

interface IButtonProps extends ButtonProps {
  children?: ReactNode | string | undefined;
  rdsType?: 'default' | 'error';
}

const StyledButton = styled(AButton)<IButtonProps>`
  height: 60px !important;

  ${({ rdsType }) => {
    switch (rdsType) {
      case 'error':
        return `
          color : red !important;
        `;
      default:
        return ``;
    }
  }}
`;

export default function Button(props: IButtonProps) {
  return (
    <StyledComponentsRegistry>
      <AntdStyleProviderLayout>
        <StyledButton {...props}>{props.children}</StyledButton>
      </AntdStyleProviderLayout>
    </StyledComponentsRegistry>
  );
}
