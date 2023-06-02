import {
  ButtonContent,
  ButtonIcon,
  HeroContainer,
  Image,
  ImageContainer,
} from "./styled";
import { Button } from "../../Common/Button";
import { Header } from "../../Common/Header";
import { Text } from "../../Common/Text";
import { Title } from "../../Common/Title";
import avatar from "../../Assets/Images/avatar.png";
import postCard from "../../Assets/Images/email.svg";
import { Switch } from "./Switch";

export const Hero = () => (
  <HeroContainer>
    <ImageContainer>
      <Image alt="Avatar Image" src={avatar} />
    </ImageContainer>
    <Switch />
    <Title body={"This is"} />
    <Header body={"Bartosz Sakiewa"} />
    <Text
      body={`🧙💻  I’m a passionate Frontend
Developer in love with React,
currently looking for new job
opportunities.`}
    />
    <Button
      body={
        <>
          <ButtonIcon src={postCard} />
          <ButtonContent>Hire Me</ButtonContent>
        </>
      }
    />
  </HeroContainer>
);
