import styled, { css } from "styled-components";
import { ReactComponent as githubIconFile } from "../../Assets/Images/github.svg";

const Text = styled.p`
  font-weight: 400;
  font-size: 21px;
  line-height: 140%;
  margin-top: -15px;
  margin-bottom: 24px;
  text-align: center;
  color: ${({ theme }) => theme.colors.malaga};
  max-width: 430px;

  ${({ loadingContainer }) =>
    loadingContainer &&
    css`
      margin-bottom: 80px;
    `}
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 90px 0 180px 0;
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 90px 0 180px 0;
`;

const ErrorMessage = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  line-height: 1.2;
  margin: 0 0 40px 0;
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

const Icon = (Icon) => styled(Icon)`
  width: 42px;
  height: 42px;
  fill: ${({ theme }) => theme.colors.violet};
`;

const GithubIcon = Icon(githubIconFile);

export {
  GithubIcon,
  Text,
  ProjectsContainer,
  LoadingContainer,
  ErrorContainer,
  ErrorMessage,
};
