import { Container } from "../../Common/Container/styled";
import { Header } from "../../Common/Header";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects } from "./projectsSlice";
import { selectData, selectStatus } from "./projectsSlice";
import { RingLoader } from "react-spinners";
import danger from "../../Assets/Images/Danger.png";
import { Button } from "../../Common/Button";
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
  LoadingContainer,
  ErrorContainer,
  ErrorMessage,
} from "./styled";

export const Projects = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
  }, []);

  const data = useSelector(selectData);
  const status = useSelector(selectStatus);

  return (
    <Container>
      <GithubIcon />
      <Header body={"Portfolio"} />
      <Text>My recent projects</Text>
      {status === "loading" ? (
        <LoadingContainer>
          <Text loadingContainer>
            Please wait, projects are being loaded...
          </Text>
          <RingLoader color="#B11FEF" size={180} margin={0} />
        </LoadingContainer>
      ) : status === "succes" ? (
        <ProjectsContainer>
          {data.map((project) => (
            <Project key={project.id}>
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
            </Project>
          ))}
        </ProjectsContainer>
      ) : status === "error" ? (
        <ErrorContainer>
          <img src={danger} />
          <ErrorMessage>"Ooops! Something went wrong..."</ErrorMessage>
          <Text>
            Sorry, failed to load Github projects. You can check them directly
            on Github.
          </Text>
          <Button href={"https://github.com/Siedemus"} body={"Go to Github"} />
        </ErrorContainer>
      ) : null}
    </Container>
  );
};
