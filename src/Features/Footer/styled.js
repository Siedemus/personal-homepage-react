import styled from "styled-components";
import { ReactComponent as discordIcon } from "../../Assets/Images/discord.svg";
import { ReactComponent as githubIcon } from "../../Assets/Images/github.svg";

const StyledFooter = styled.footer``;

const FooterDescription = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: ${({ theme }) => theme.colors.mineShaft};
  margin-bottom: 28px;
  max-width: 670px;
  letter-spacing: 0.05em;
`;

const IconsContainer = styled.div`
  padding-bottom: 31px;
  display: flex;
  gap: 20px;
`;

const Icon = (Icon) => styled(Icon)`
  width: 62px;
  height: 62px;
  cursor: pointer;

  &:hover {
    fill: ${({ theme }) => theme.colors.violet};
  }
`;

const DiscordIcon = Icon(discordIcon);

const GithubIcon = Icon(githubIcon);

const GithubContainer = styled.a``;

const DiscordContainer = styled.div`
  transition: 1s;
  position: relative;

  &:hover {
    &::after {
      position: absolute;
      content: "7us#2920";
      top: -35px;
      left: -15px;
      background-image: ${({ theme }) => theme.gradients.primary};
      border-radius: 15px;
      padding: 7px;
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export {
  StyledFooter,
  FooterDescription,
  IconsContainer,
  DiscordIcon,
  GithubIcon,
  GithubContainer,
  DiscordContainer,
};
