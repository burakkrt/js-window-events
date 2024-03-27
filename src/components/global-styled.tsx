import styled from "@emotion/styled";

export const Note = styled.span<{ type: "info" | "danger" | "success" }>`
  background-color: ${({ type }) =>
    type === "info" ? "#fffc9b" : type === "success" ? "#BFEA7C" : "#A94438"};
  color: ${({ type }) => (type === "danger" ? "#FFF7F1" : "#0c2d57")};
  padding: 0 4px;
  border-radius: 2px;
`;
