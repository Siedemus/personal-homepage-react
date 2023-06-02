import styled from "styled-components";

export const StyledList = styled.ul`
  list-style-type: disc;
  font-size: 19px;
  font-weight: 400;
  line-height: 17px;
  display: grid;
  padding: 0 0 30px 40px;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px 40px;
  color: ${({ theme }) => theme.colors.slateGray};

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
