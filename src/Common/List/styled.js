import styled from "styled-components";

export const StyledList = styled.ul`
  list-style-type: disc;
  color: ${({ theme }) => theme.colors.violet};
  padding: 0 16px 12px;
  font-size: 17px;
  font-weight: 400;
  line-height: 17px;
`;
