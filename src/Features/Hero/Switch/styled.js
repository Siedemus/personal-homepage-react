import styled, { css } from "styled-components";

const SwitchContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.mercury};
  width: 47px;
  height: 25px;
  position: absolute;
  right: 0;
  padding: 3px;
  display: flex;
  align-items: center;
  border-radius: 250px;

  &::after {
    position: absolute;
    content: "";
    background: ${({ theme }) => theme.gradients.primary};
    z-index: -1;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 16px;
  }
`;

const StyledSwitch = styled.div`
  width: 20px;
  height: 20px;
  background-image: ${({ theme }) => theme.gradients.primary};
  border-radius: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  transition: 0.5s;

  ${({ darkMode }) =>
    darkMode &&
    css`
      transform: translateX(21px);
    `}
`;

const SwitchIcon = styled.img`
  width: 13px;
  height: 13px;
  transition: 0.5s;

  ${({ darkMode }) =>
    darkMode &&
    css`
      transform: rotate(180deg);
    `}
`;

export { SwitchContainer, StyledSwitch, SwitchIcon };
