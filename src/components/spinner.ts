import styled, { css } from "styled-components";

export const Loader = styled.div`
  top: 210px;
  bottom: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  display: inline-block;
  width: 60px;
  height: 60px;
  vertical-align: text-bottom;
  border: .25em solid  ${props => props.theme.text};
  border-right-color: transparent;
  border-radius: 50%;
  -webkit-animation: spinner-border .75s linear infinite;
  animation: spinner-border .75s linear infinite;
  z-index: 4;

  @keyframes spinner-border {
    to { transform: rotate(360deg); }
  }
`