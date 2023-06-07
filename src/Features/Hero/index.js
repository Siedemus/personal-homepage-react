import { Header } from "../../Common/Header/styled";
import { Text } from "../../Common/Text/styled";
import { Title } from "../../Common/Title/styled";
import avatar from "../../Assets/Images/avatar.png";
import postCard from "../../Assets/Images/email.svg";
import { Switch } from "./Switch";
import { useSelector } from "react-redux";
import { selectIsDarkMode } from "./Switch/switchSlice";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  ButtonContent,
  ButtonIcon,
  HeroContainer,
  Image,
  ImageContainer,
  InfoContainer,
  SwitchTitle,
} from "./styled";
import email from "../../Assets/data/emial";
import { Link } from "../../Common/Link/styled";

export const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "This is",
      "To jest",
      "Esto es",
      "C'est",
      "Das ist",
      "Questo è",
      "これは",
      "這是",
    ],
    loop: {},
    typeSpeed: 120,
  });

  const darkMode = useSelector(selectIsDarkMode);

  return (
    <HeroContainer>
      <ImageContainer>
        <Image alt="Avatar Image" src={avatar} />
      </ImageContainer>
      <InfoContainer>
        <Title>
          {text}
          <Cursor cursorStyle="<" cursorColor="#B11FEF" />
        </Title>
        <Header>Bartosz Sakiewa</Header>
        <Text>
          🧙💻 I’m a passionate Frontend Developer in love with React, currently
          looking for new job opportunities.
        </Text>
        <Link href={`mailto:${email}`}>
          <ButtonIcon src={postCard} />
          <ButtonContent>Hire Me</ButtonContent>
        </Link>
      </InfoContainer>
      <SwitchTitle>Dark mode {darkMode ? "on" : "off"}</SwitchTitle>
      <Switch />
    </HeroContainer>
  );
};
