import styled, { css } from "styled-components";

export const StyledHeader = styled.h2`
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  margin: 8px 0 16px 0;

  ${({ fontSize }) =>
    fontSize &&
    css`
      font-size: ${fontSize};
    `}

  ${({ containerHeader }) =>
    containerHeader &&
    css`
      padding-bottom: 12px;
      border-bottom: 1px solid ${({theme}) => theme.colors.iron};
      margin: 0;
    `}
`;
