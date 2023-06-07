import { StyledLink } from "./styled";

export const Button = ({ body, href }) => (
  <StyledLink target="_blank" href={href}>
    {body}
  </StyledLink>
);
