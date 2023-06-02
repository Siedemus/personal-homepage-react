import styled from "styled-components";

const Icon = styled.img`
  width: 42px;
  height: 42px;
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 21px;
  line-height: 140%;
  margin-bottom: 24px;
`;

const ProjectsContainer = styled.div`
  display: grid;
  gap: 16px;
  border-bottom: 48px;
`;

const Project = styled.div`
  display: grid;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  align-items: center;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 6px solid ${({ theme }) => theme.colors.iron};
  border-radius: 4px;
`;

const ProjectTitle = styled.h3`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.violet};
  font-size: 20px;
  line-height: 19px;
  margin: 0 16px 16px 0;
`;

const ProjectDescription = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.slateGray};
  padding-bottom: 16px;
`;

const ProjectReferences = styled.div`
  display: grid;
  grid-template-columns: 2fr;
  gap: 10px;
`;

const ProjectReference = styled.p`
  font-weight: 400;
  font-size: 16px;
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
  Project,
  ProjectDescription,
  ProjectLink,
  ProjectReference,
  ProjectReferences,
  ProjectTitle,
  Text,
  Icon,
  ProjectsContainer,
};
