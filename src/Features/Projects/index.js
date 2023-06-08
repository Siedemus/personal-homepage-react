import { Container } from "../../Common/Container/styled";
import { Header } from "../../Common/Header/styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects } from "./projectsSlice";
import { selectData, selectStatus } from "./projectsSlice";
import { RingLoader } from "react-spinners";
import danger from "../../Assets/Images/Danger.png";
import { Link } from "../../Common/Link/styled";
import {
  ProjectsContainer,
  Text,
  GithubIcon,
  LoadingContainer,
  ErrorContainer,
  ErrorMessage,
} from "./styled";
import { Project } from "./Project";

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
      <Header>Portfolio</Header>
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
            <Project key={project.id} project={project} />
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
          <Link href="https://github.com/Siedemus">Go to Github</Link>
        </ErrorContainer>
      ) : null}
    </Container>
  );
};
