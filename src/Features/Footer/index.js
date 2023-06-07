import { Title } from "../../Common/Title/styled";
import { Header } from "../../Common/Header/styled";
import {
  FooterDescription,
  IconsContainer,
  StyledFooter,
  DiscordIcon,
  GithubIcon,
  GithubContainer,
  DiscordContainer,
} from "./styled";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import email from "../../Assets/data/emial";

export const Footer = () => {
  const [text] = useTypewriter({
    words: [
      "Let's talk!",
      "Porozmawiajmy!",
      "¡Hablemos!",
      "Parlons!",
      "Lass uns reden!",
      "Parliamo!",
      "話しましょう!",
      "讓我們談談吧！",
    ],
    loop: {},
    typeSpeed: 120,
  });

  return (
    <StyledFooter>
      <Title>
        {text}
        <Cursor cursorStyle="<" cursorColor="#B11FEF" />
      </Title>
      <Header email fontSize={"26px"}>
        {email}
      </Header>
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
};
