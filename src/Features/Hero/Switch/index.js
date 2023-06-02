import { StyledSwitch, SwitchContainer, SwitchIcon } from "./styled";
import { useState } from "react";
import sun from "../../../Assets/Images/sun.png";

export const Switch = () => {
  const [toggleswitch, setToggleSwitch] = useState(false);

  const onSwitchClick = () => {
    setToggleSwitch((toggleswitch) => !toggleswitch);
  };

  return (
    <SwitchContainer onClick={onSwitchClick}>
      <StyledSwitch toggleSwitch={toggleswitch}>
        <SwitchIcon src={sun} />
      </StyledSwitch>
    </SwitchContainer>
  );
};
