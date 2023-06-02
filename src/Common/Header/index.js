import { StyledHeader } from "./styled";

export const Header = ({ fontSize, body }) => (
  <StyledHeader fontSize={fontSize}>{body}</StyledHeader>
);
