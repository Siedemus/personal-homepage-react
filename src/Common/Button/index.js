import { StyledButton } from "./styled";

export const Button = ({ body, href }) => <StyledButton target="_blank" href={href}>{body}</StyledButton>;
