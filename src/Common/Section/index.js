import { StyledSection } from "./styled";

export const Section = ({ body, header }) => (
  <StyledSection>
    {header}
    {body}
  </StyledSection>
);
