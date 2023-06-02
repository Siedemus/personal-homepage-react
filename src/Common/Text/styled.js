import styled from "styled-components";

export const StyledText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 140%;
  color: ${({ theme }) => theme.colors.slateGray};
`;
