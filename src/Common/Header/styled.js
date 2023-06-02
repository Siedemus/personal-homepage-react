import styled, { css } from "styled-components";

export const StyledHeader = styled.h2`
  font-style: normal;
  font-weight: 900;
  font-size: 30px;

  ${({ fontSize }) =>
    fontSize &&
    css`
      font-size: ${fontSize};
    `}
`;
