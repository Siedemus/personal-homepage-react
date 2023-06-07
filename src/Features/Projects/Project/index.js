import {
  StyledProject,
  ProjectDescription,
  ProjectLink,
  ProjectReference,
  ProjectReferences,
  ProjectTitle,
} from "./styled";

export const Project = ({ project }) => {
  return (
    <StyledProject>
      <ProjectTitle>{project.name}</ProjectTitle>
      <ProjectDescription>{project.description}</ProjectDescription>
      <ProjectReferences>
        <ProjectReference>
          Demo:&nbsp;
          <ProjectLink target="_blank" href={project.homepage}>
            Link to Demo
          </ProjectLink>
        </ProjectReference>
        <ProjectReference>
          Code:&nbsp;
          <ProjectLink target="_blank" href={project.html_url}>
            Link to Code
          </ProjectLink>
        </ProjectReference>
      </ProjectReferences>
    </StyledProject>
  );
};
