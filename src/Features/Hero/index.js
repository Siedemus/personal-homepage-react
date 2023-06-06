import { Button } from "../../Common/Button";
import { Header } from "../../Common/Header";
import { Text } from "../../Common/Text";
import { Title } from "../../Common/Title";
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
import email from "../../Assets/emial";

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
        <Title
          body={
            <>
              {text}
              <Cursor cursorStyle="<" cursorColor="#B11FEF" />
            </>
          }
        />
        <Header body={"Bartosz Sakiewa"} />
        <Text
          body={`🧙💻  I’m a passionate Frontend
  Developer in love with React,
  currently looking for new job
  opportunities.`}
        />
        <Button
          href={`mailto:${email}`}
          body={
            <>
              <ButtonIcon src={postCard} />
              <ButtonContent>Hire Me</ButtonContent>
            </>
          }
        />
      </InfoContainer>
      <SwitchTitle>Dark mode {darkMode ? "on" : "off"}</SwitchTitle>
      <Switch />
    </HeroContainer>
  );
};
