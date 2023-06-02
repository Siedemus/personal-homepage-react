import styled from "styled-components";

export const StyledButton = styled.a`
  border: none;
  background-image: ${({ theme }) => theme.gradients.second};
  background-size: 290%;
  background-position: left;
  width: 138px;
  height: 46px;
  border-radius: 4px;
  color: ${({theme}) => theme.colors.white};
  transition: 1s;
  display: flex;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 32px 0 4px 0;
  text-decoration: none;

  &:hover {
    background-position: right;
  }
`;
