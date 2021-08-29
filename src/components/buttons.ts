import styled, { css } from "styled-components";

interface Props {
  name?: string;
  className?: string;
  onClick?: (e: Event) => void;
  state?: string,
  type?: string,
  size?: string,
  padding?: number
}

const styleButton = css<Props>`
  padding: 3px 7px;
  color: inherit;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;
  background: transparent;

  &:hover {
    opacity: 0.9;
  }


  ${props => props.state === 'active' && css`
    border: 1px solid ${props => props.theme.todo.borderLinkActive};
  `}

  ${props => props.type === 'primary' && css`
    background: #ff5b5b;
    color: #ffffff;
  `}

  ${props => props.type === 'secondary' && css`
    background: #46b4dc;
    color: #ffffff;
  `}
`

export const Link = styled.a<Props>`
  ${styleButton}
  &:hover {
    border: 1px solid ${props => props.theme.todo.borderLink};
  }
`

export const Button = styled.button<Props>`
  
  ${styleButton}  
  
  &:hover {
    cursor: pointer;
  }

  ${props => props && css`
    padding: ${props.padding}px !important;
  `}

  ${props => props.size === 'sm' && css`
    font-size: 14px;
  `}

  ${props => props.size === 'md' && css`
    font-size: 16px;
  `}

  ${props => props.size === 'lg' && css`
    font-size: 18px;
  `}
`

export const ButtonRemove = styled.button<Props>`
  
  ${Button};  
  
  display: none;
  background: transparent;
  border: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  right: 10px;
  width: 40px;
  height: 40px;
  font-size: 30px;
  color: #cc9a9a;
  transition: color 0.2s ease-out;

  &:hover {
    color: #af5b5e;
    cursor: pointer;
    z-index: 3;    
  }
  
  &::after {
    content: '×';
  }
`