import { useEffect } from "react";
import * as Styled from "./HomeContainer.styled";

const HomeContainer = () => {
  useEffect(() => {
    console.log(window.innerHeight);
    console.log(window.outerHeight);
  }, []);

  return <Styled.HomeContainer>HomeContainer</Styled.HomeContainer>;
};

export default HomeContainer;
