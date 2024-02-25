import * as Styled from "./HomeContainer.styled";
import WindowHeight from "../../components/window-height";
import WindowLocation from "../../components/window-location/WindowLocation";

const HomeContainer = () => {
  return (
    <Styled.HomeContainer>
      <WindowHeight />
      <WindowLocation />
    </Styled.HomeContainer>
  );
};

export default HomeContainer;
