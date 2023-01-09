import React, { ElementType } from 'react';

import styled from 'styled-components';

const ContainerStyled = styled.div`
  @media (min-width: 992px) {
    max-width: 960px;
  }
  width: 100%;
  margin: 0 auto;
`;

export const FlexGridContainer: ElementType = ({ children }) => (
  <ContainerStyled data-testid="flexgrid-container">{children}</ContainerStyled>
);
