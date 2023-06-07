import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*, ::before, ::after {
  box-sizing: border-box;
  margin: 0;
}

body {
  height: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  font-family: "Inter";
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  padding: 0 17px 0 16px;
  letter-spacing: 0.05em;
  max-width: 1200px;
  
  
  @media (min-width: 800px) {
    margin: 50px auto;
  }
}
`;
