import * as Styled from "./HomeContainer.styled";
import WindowHeight from "../../components/window-height";
import WindowLocation from "../../components/window-location/WindowLocation";
import Navigator from "../../components/navigator";

const HomeContainer = () => {
  return (
    <Styled.HomeContainer>
      <WindowHeight />
      <WindowLocation />
      <Navigator />
    </Styled.HomeContainer>
  );
};

export default HomeContainer;
