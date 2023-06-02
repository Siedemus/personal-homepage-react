import { StyledHeader } from "./styled";

export const Header = ({ email, containerHeader, fontSize, body }) => (
  <StyledHeader email={email} containerHeader={containerHeader} fontSize={fontSize}>
    {body}
  </StyledHeader>
);
