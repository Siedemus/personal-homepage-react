import styled from "styled-components";

export const Section = styled.section`
  padding: 16px 16px 0;
  display: flex;
  gap: 12px;
  background-color: ${({ theme }) => theme.colors.containerColor};
  display: flex;
  flex-direction: column;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  margin-bottom: 50px;
`;
