import styled, { css } from "styled-components";

export const StyledHeader = styled.h2`
  font-style: normal;
  font-weight: 900;
  font-size: 40px;
  margin: 8px 0 16px 0;
  color: ${({ theme }) => theme.colors.malaga};

  ${({ fontSize }) =>
    fontSize &&
    css`
      font-size: ${fontSize};
    `}

  ${({ containerHeader }) =>
    containerHeader &&
    css`
      padding: 16px;
      border-bottom: 1px solid ${({ theme }) => theme.colors.iron};
      margin: 0;
    `}

    ${({ email }) =>
    email &&
    css`
      transition: 0.5s;
      &:hover {
        color: ${({ theme }) => theme.colors.violet};
      }
    `}
`;
