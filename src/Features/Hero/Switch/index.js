import { StyledSwitch, SwitchContainer, SwitchIcon } from "./styled";
import sun from "../../../Assets/Images/sun.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { switchDarkMode } from "./switchSlice";
import { selectIsDarkMode } from "./switchSlice";

export const Switch = () => {
  const darkMode = useSelector(selectIsDarkMode);
  const dispatch = useDispatch();

  return (
    <SwitchContainer onClick={() => dispatch(switchDarkMode())}>
      <StyledSwitch darkMode={darkMode}>
        <SwitchIcon darkMode={darkMode} src={sun} />
      </StyledSwitch>
    </SwitchContainer>
  );
};
