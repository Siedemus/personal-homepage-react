import { Title } from "../../Common/Title";
import { Header } from "../../Common/Header";
import {
  FooterDescription,
  IconsContainer,
  StyledFooter,
  DiscordIcon,
  GithubIcon,
  GithubContainer,
  DiscordContainer,
} from "./styled";

export const Footer = () => (
  <StyledFooter>
    <Title body={`Let’s talk!`} />
    <Header body={"barsak1177@gmail.com"} fontSize={"22px"} />
    <FooterDescription>
      I’m always open to new projects whenever I have the time. If you have a
      website, dashboard or mobile app in mind and need some help to make your
      ideas come to life, feel free to conatct me 🤞
    </FooterDescription>
    <IconsContainer>
      <GithubContainer
        href="https://github.com/Siedemus"
        target="_blank"
        rel="noreferrer"
      >
        <GithubIcon />
      </GithubContainer>
      <DiscordContainer>
        <DiscordIcon />
      </DiscordContainer>
    </IconsContainer>
  </StyledFooter>
);
