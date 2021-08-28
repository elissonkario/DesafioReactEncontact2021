import styled from "styled-components";

export const WrapList = styled.div`
  border-radius: 3px;
  padding: 0.5rem 0;
  background: #fff;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`

export const TodoTitle = styled.h1`
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  margin: 0;
  color: ${props => props.theme.todoTitle};
`

export const TodoInput = styled.input`
  padding: 10px 0 10px 55px;
  border: none;
  background: transparent;
  width: 100%;
  font-size: 24px;
  position: relative;
  
  &:hover, &:active, &:focus, &:focus-visible {
    outline: 0;
  }

  &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #e6e6e9;
    font-style: italic;
  }

  &:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #e6e6e9;
    font-style: italic;
  }

  &::-ms-input-placeholder { /* Microsoft Edge */
    color: #e6e6e9;
    font-style: italic;
  }
`
