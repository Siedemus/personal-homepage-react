import styled from "styled-components";

export const StyledText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.slateGray};
`;
