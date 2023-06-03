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
import { useTypewriter, Cursor } from "react-simple-typewriter";

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
      <Title
        body={
          <>
            {text}
            <Cursor cursorStyle="<" cursorColor="#B11FEF" />
          </>
        }
      />
      <Header email body={"barsak1177@gmail.com"} fontSize={"26px"} />
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
