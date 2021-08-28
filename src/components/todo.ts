import styled from "styled-components";

export const TodoWrap = styled.div`
  border-radius: 3px;
  padding: 0.5rem 0 0;
  background: ${props => props.theme.todo.container};
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`

export const TodoHead = styled.head`
  display: flex;
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
`

export const TodoTitle = styled.h1`
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  margin: 0;
  color: ${props => props.theme.todo.title};
`

export const TodoSelectAll = styled.span`
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);

  &:after {
    content: '❯';
    font-size: 22px;
    color:  ${props => props.theme.todo.placeHolder};
    padding: 10px 15px 10px 15px;
  }
`


export const TodoSection = styled.section`
  position: relative;
  z-index: 2;
  border-top: 1px solid ${props => props.theme.todo.borderContainer};

`
export const TodoInput = styled.input`
  padding: 10px 0 10px 20px;
  border: none;
  background: transparent;
  width: 100%;
  font-size: 24px;
  position: relative;

  &:hover, &:active, &:focus, &:focus-visible {
    outline: 0;
  }

  &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${props => props.theme.todo.placeHolder};
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

export const TodoList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
`

export const TodoItem = styled.li`
  display: flex;
  position: relative;
  font-size: 24px;
  padding: 15px 15px 15px 25px;
  border-bottom: 1px solid ${props => props.theme.todo.border};
`

export const TodoItemInput = styled.input`
  margin-top: 8px;
`
export const TodoItemLabel = styled.label`
  word-break: break-all;
  padding-left: 15px;
  display: block;
  line-height: 1.2;
  transition: color 0.4s;
`
export const TodoFooter = styled.footer`
  position: relative;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #777;
  padding: 15px 25px;
  text-align: center;
  margin-top: -1px;
  z-index: 3;
  border-top: 1px solid ${props => props.theme.todo.borderContainer};
  
  &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    overflow: hidden;
    z-index: -1;
    box-shadow: 0 1px 1px rgb(0, 0, 0, 0.2), 
    0 8px 0 -3px ${props => props.theme.todo.shadowFooter},
    0 9px 1px -3px rgba(0, 0, 0, 0.2), 
    0 16px 0 -6px  ${props => props.theme.todo.shadowFooter}, 
    0 17px 2px -6px rgba(0, 0, 0, 0.2)
  }
`

export const TodoCount = styled.span`
  align-self: center;
`

export const TodoFilters = styled.ul`
  align-self: center;
  list-style: none;
  display: inline-block;
  padding: 0;
  margin: 0;
`

export const TodoFiltersItem = styled.li`
  display: inline-block;
  margin-left: 5px;
  margin-right: 5px;
`