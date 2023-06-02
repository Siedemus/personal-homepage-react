import {
  Project,
  ProjectDescription,
  ProjectLink,
  ProjectReference,
  ProjectReferences,
  ProjectTitle,
  ProjectsContainer,
  Text,
  GithubIcon,
} from "./styled";
import { Container } from "../../Common/Container";
import { Header } from "../../Common/Header";

export const Projects = () => (
  <Container
    body={
      <>
        <GithubIcon />
        <Header body={"Portfolio"} />
        <Text>My recent projects</Text>
        <ProjectsContainer>
          <Project>
            <ProjectTitle>Movie Browser</ProjectTitle>
            <ProjectDescription>
              Project description, e.g. website where you can search for
              favourite movies and people. Project description, e.g. website
              where you can search.
            </ProjectDescription>
            <ProjectReferences>
              <ProjectReference>
                Demo:&nbsp;<ProjectLink>https://link.demo.com</ProjectLink>
              </ProjectReference>
              <ProjectReference>
                Code:&nbsp;<ProjectLink>https://link.demo.com</ProjectLink>
              </ProjectReference>
            </ProjectReferences>
          </Project>
          <Project>
            <ProjectTitle>Movie Browser</ProjectTitle>
            <ProjectDescription>
              Project description, e.g. website where you can search for
              favourite movies and people. Project description, e.g. website
              where you can search.
            </ProjectDescription>
            <ProjectReferences>
              <ProjectReference>
                Demo:&nbsp;<ProjectLink>https://link.demo.com</ProjectLink>
              </ProjectReference>
              <ProjectReference>
                Code:&nbsp;<ProjectLink>https://link.demo.com</ProjectLink>
              </ProjectReference>
            </ProjectReferences>
          </Project>
          <Project>
            <ProjectTitle>Movie Browser</ProjectTitle>
            <ProjectDescription>
              Project description, e.g. website where you can search for
              favourite movies and people. Project description, e.g. website
              where you can search.
            </ProjectDescription>
            <ProjectReferences>
              <ProjectReference>
                Demo:&nbsp;<ProjectLink>https://link.demo.com</ProjectLink>
              </ProjectReference>
              <ProjectReference>
                Code:&nbsp;<ProjectLink>https://link.demo.com</ProjectLink>
              </ProjectReference>
            </ProjectReferences>
          </Project>
          <Project>
            <ProjectTitle>Movie Browser</ProjectTitle>
            <ProjectDescription>
              Project description, e.g. website where you can search for
              favourite movies and people. Project description, e.g. website
              where you can search.
            </ProjectDescription>
            <ProjectReferences>
              <ProjectReference>
                Demo:&nbsp;<ProjectLink>https://link.demo.com</ProjectLink>
              </ProjectReference>
              <ProjectReference>
                Code:&nbsp;<ProjectLink>https://link.demo.com</ProjectLink>
              </ProjectReference>
            </ProjectReferences>
          </Project>
          <Project>
            <ProjectTitle>Movie Browser</ProjectTitle>
            <ProjectDescription>
              Project description, e.g. website where you can search for
              favourite movies and people. Project description, e.g. website
              where you can search.
            </ProjectDescription>
            <ProjectReferences>
              <ProjectReference>
                Demo:&nbsp;<ProjectLink>https://link.demo.com</ProjectLink>
              </ProjectReference>
              <ProjectReference>
                Code:&nbsp;<ProjectLink>https://link.demo.com</ProjectLink>
              </ProjectReference>
            </ProjectReferences>
          </Project>
          <Project>
            <ProjectTitle>Movie Browser</ProjectTitle>
            <ProjectDescription>
              Project description, e.g. website where you can search for
              favourite movies and people. Project description, e.g. website
              where you can search.
            </ProjectDescription>
            <ProjectReferences>
              <ProjectReference>
                Demo:&nbsp;<ProjectLink>https://link.demo.com</ProjectLink>
              </ProjectReference>
              <ProjectReference>
                Code:&nbsp;<ProjectLink>https://link.demo.com</ProjectLink>
              </ProjectReference>
            </ProjectReferences>
          </Project>
        </ProjectsContainer>
      </>
    }
  />
);
