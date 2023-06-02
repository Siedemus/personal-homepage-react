import styled from "styled-components";
import { ReactComponent as githubIconFile } from "../../Assets/Images/github.svg";

const Text = styled.p`
  font-weight: 400;
  font-size: 21px;
  line-height: 140%;
  margin-top: -15px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.malaga};
`;

const ProjectsContainer = styled.div`
  display: grid;
  gap: 40px;
  margin-bottom: 60px;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Project = styled.div`
  display: grid;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  align-items: center;
  padding: 24px 30px;
  background-color: ${({ theme }) => theme.colors.containerColor};
  border: 6px solid ${({ theme }) => theme.colors.iron};
  border-radius: 4px;
  transition: 0.8s;
  max-width: 590px;
  max-height: 330px;
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
  line-height: 19px;
  margin: 16px 16px 16px 0;
`;

const ProjectDescription = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 17px;
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
  font-weight: 400;
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

const Icon = (Icon) => styled(Icon)`
  width: 42px;
  height: 42px;
  fill: ${({ theme }) => theme.colors.violet};
`;

const GithubIcon = Icon(githubIconFile);

export {
  Project,
  ProjectDescription,
  ProjectLink,
  ProjectReference,
  ProjectReferences,
  GithubIcon,
  ProjectTitle,
  Text,
  ProjectsContainer,
};
