import { StyledHeader } from "./styled";

export const Header = ({ containerHeader, fontSize, body }) => (
  <StyledHeader containerHeader={containerHeader} fontSize={fontSize}>
    {body}
  </StyledHeader>
);
