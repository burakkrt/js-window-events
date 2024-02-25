import styled from "@emotion/styled";

export const WindowHeightLayout = styled.div`
  padding: 10px;
`;

export const TextCard = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  background-color: #0c2d57;
  color: #c7c8cc;
  padding: 18px;

  .title {
    font-weight: bold;
    margin-right: 4px;
    color: #fc6736;
    display: block;
    margin-bottom: 8px;
  }

  .sub-title {
    margin-right: 4px;
  }

  .px {
    font-size: 18px;
    color: #fffc9b;
  }

  .info {
    margin-top: 8px;
    text-align: start;
    font-size: 16px;
    line-height: 18.6px;
  }
`;
