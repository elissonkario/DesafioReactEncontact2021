import styled, { css } from "styled-components";

export const Button = styled.a<any>`
  display: inline-block;
  border-radius: 5px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  border: 2px solid white;
  text-align: center;
  text-decoration: none;

  &:hover {
    opacity: 0.9;
  }  
  
  ${props => props.primary && css`
    background: #ff5b5b;
    color: #ffffff;
  `}

  ${props => props.secondary && css`
    background: #46b4dc;
    color: #ffffff;
  `}
`