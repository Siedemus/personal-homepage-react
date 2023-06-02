import styled, { css } from "styled-components";

const HeroContainer = styled.div`
  display: grid;
  margin: 21px 0 40px 0;
  position: relative;

  @media (min-width: 800px) {
    grid-template-columns: 353px 1fr;
    gap: 100px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  max-width: 633px;
`;

const ImageContainer = styled.div`
  background-image: ${({ theme }) => theme.gradients.primary};
  width: 142px;
  height: 142px;
  border-radius: 250px;
  margin: 11px 0;
  transition: 1s;
  flex-basis: 400px;

  @media (min-width: 800px) {
    width: 368px;
    height: 368px;
  }
`;

const Image = styled.img`
  width: 132px;
  height: 132px;
  border-radius: 250px;
  margin: 5px;
  margin-bottom: 13px;
  transition: 1s;

  @media (min-width: 800px) {
    width: 358px;
    height: 358px;
  }

  ${({ email }) =>
    email &&
    css`
      width: 52px;
      height: 52px;
    `}
`;
const ButtonIcon = styled.img`
  width: 26px;
  height: 24px;
`;

const ButtonContent = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
`;

export {
  HeroContainer,
  Image,
  ImageContainer,
  ButtonContent,
  ButtonIcon,
  InfoContainer,
};
