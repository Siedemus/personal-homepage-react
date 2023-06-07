import styled from "styled-components";

const StyledProject = styled.div`
  display: grid;
  flex-direction: column;
  align-items: center;
  padding: 24px 30px;
  background-color: ${({ theme }) => theme.colors.containerColor};
  border: 6px solid ${({ theme }) => theme.colors.iron};
  border-radius: 4px;
  transition: 0.8s;
  width: 100%;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);

  &:hover {
    border: 6px solid ${({ theme }) => theme.colors.violet};
  }
`;

const ProjectTitle = styled.h3`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.violet};
  font-size: 24px;
  line-height: 24px;
  margin: 16px 16px 16px 0;
`;

const ProjectDescription = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  letter-spacing: 0.9px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.slateGray};
  padding: 16px 0 24px;
`;

const ProjectReferences = styled.div`
  display: grid;
  grid-template-columns: 2fr;
  gap: 20px;
  font-size: 16px;
`;

const ProjectReference = styled.p`
  font-weight: 600;
  font-size: 17px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.slateGray};
`;

const ProjectLink = styled.a`
  font-weight: 400;
  line-height: 17px;
  color: ${({ theme }) => theme.colors.violet};
`;

export {
  StyledProject,
  ProjectDescription,
  ProjectLink,
  ProjectReference,
  ProjectReferences,
  ProjectTitle,
};
