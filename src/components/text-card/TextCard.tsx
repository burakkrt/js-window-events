import React from "react";
import { ITextCardProps } from "./types.ts";
import * as Styled from "./TextCard-styled";

const TextCard: React.FC<ITextCardProps> = ({ children }) => {
  return <Styled.TextCardLayout>{children}</Styled.TextCardLayout>;
};

export default TextCard;
