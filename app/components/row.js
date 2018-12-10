// @flow

import React from 'react';
import styled from 'styled-components';
import type { Node } from 'react';

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${props => props.alignItems};
  justify-content: ${props => props.justifyContent};
`;

type Props = {
  alignItems?: string,
  justifyContent?: string,
  children: Node,
};

export const RowComponent = ({ children, ...props }: Props) => (
  <Flex {...props}>{React.Children.map(children, ch => ch)}</Flex>
);

RowComponent.defaultProps = {
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
};
