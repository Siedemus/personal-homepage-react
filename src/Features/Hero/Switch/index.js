import { StyledSwitch, SwitchContainer, SwitchIcon } from "./styled";
import sun from "../../../Assets/Images/sun.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { switchDarkMode } from "./switchSlice";
import { selectDarkMode } from "./switchSlice";

export const Switch = () => {
  const toggleSwitch = useSelector(selectDarkMode);
  const dispatch = useDispatch();

  return (
    <SwitchContainer onClick={() => dispatch(switchDarkMode())}>
      <StyledSwitch toggleSwitch={toggleSwitch}>
        <SwitchIcon toggleSwitch={toggleSwitch} src={sun} />
      </StyledSwitch>
    </SwitchContainer>
  );
};
