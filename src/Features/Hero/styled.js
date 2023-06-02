import styled, { css } from "styled-components";

const HeroContainer = styled.div`
  display: grid;
  margin: 21px 17px 40px 16px;
  position: relative;
`;

const ImageContainer = styled.div`
  background-image: ${({ theme }) => theme.gradients.primary};
  width: 142px;
  height: 142px;
  border-radius: 250px;
  margin: 11px 0;
  transition: 1s;
`;

const Image = styled.img`
  width: 132px;
  height: 132px;
  border-radius: 250px;
  margin: 5px;
  margin-bottom: 13px;

  ${({ email }) =>
    email &&
    css`
      width: 52px;
      height: 52px;
    `}
`;
const ButtonIcon = styled.img`
  width: 35px;
  height: 15px;
`;

const ButtonContent = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
`;

export { HeroContainer, Image, ImageContainer, ButtonContent, ButtonIcon };
