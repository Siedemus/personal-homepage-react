import styled from "styled-components";

export const Title = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  text-transform: uppercase;
  margin: 12px 0 0 0;
  color: ${({ theme }) => theme.colors.slateGray};
`;
