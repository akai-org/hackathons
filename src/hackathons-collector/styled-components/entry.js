import styled from "react-emotion";

const Entry = styled("article")`
  display: flex;
  margin: 20px;

  & article {
    width: 80%;
  }

  & footer {
    text-align: right;
    position: relative;
    width: 20%;
  }

  & .tags {
    font-size: 14px;

    & span {
      padding-right: 0.5em;
    }
  }

  & .metadata {
    font-size: 14px;
  }

  & a {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    color: darkorange;
    text-decoration: none;

    font-size: 14px;
    border: 1px solid;
    padding: 0.2em 0.4em;
    border-radius: 0.4em;
  }

  & p {
    margin: 10px 0 0;
    font-size: 13px;
  }
`;

export default Entry;
