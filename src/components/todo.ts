import styled from "styled-components";

interface InputProps {
    value?: any;
    placeholder?: any
}


export const TodoWrap = styled.div`
  border-radius: 3px;
  padding: 0.5rem 0 0;
  background: ${props => props.theme.todo.container};
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`

export const TodoHead = styled.head`
  display: flex;
  padding-bottom: 5px;
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  z-index: 10;
  position: relative;
`

export const TodoTitle = styled.h1`
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  margin: 0;
  color: ${props => props.theme.todo.title};
`

export const TodoSelectAll = styled.span<{ isVisible?: boolean, className?: any }>`
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
  margin-left: 4px;
  
  &.all-items-completed {
    &:after {
      color: #737373;
    }
  }

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
export const TodoInput = styled.input<InputProps>`
  padding: 10px 0 10px 20px;
  border: none;
  background: transparent;
  width: 100%;
  font-size: 24px;
  position: relative;
  color: ${props => props.theme.todo.input};

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

export const TodoWrapItem = styled.div<{className?: any}>`
  position: relative;
  
  &:hover {
    .btn-remove-item {
      display: block;      
    }
  }
  
  &.completed label {
    color: ${props => props.theme.todo.itemCompleted};
    text-decoration: line-through;  
`

export const TodoItem = styled.li`
  display: flex;
  position: relative;
  font-size: 24px;
  padding: 15px 15px 15px 15px;
  height: 30px;
  border-bottom: 1px solid ${props => props.theme.todo.border};
  opacity: ${props => props.theme.todo.checkbox};
  
  input {
    position: absolute;
    left: 11px;
    height: 40px;
    width: 40px;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    -webkit-appearance: none;
    appearance: none;
    z-index: 10;
    
    + label {
      background-image: url(data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E);
      color: ${props => props.theme.todo.item};
      background-repeat: no-repeat;
      background-position: center left;
      padding: 0 0 0 60px;     
      width: 100%;
      height: 59px;
      position: absolute;
      top: 0;
      line-height: 58px;
    }

    &:checked + label {
      color: ${props => props.theme.todo.itemCompleted};
      background-image: url(data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E);
    }    
  }
  
  &.editing {
    .edit {
      display: block;
    }
  }
`

export const TodoItemInput = styled.input`
  margin-top: 8px;
  
  &.edit {
    left: 62px;
    width: 88%;
    border: 1px solid #999;
    box-shadow: inset 0 -1px 5px 0 rgb(0 0 0 / 20%);
    box-sizing: border-box;
    font-size: 24px;
    color: ${props => props.theme.todo.item};
    z-index: 15;
    height: 61px;
    top: -2px;
    padding-left: 12px;
    display: none;
    background: ${props => props.theme.todo.inputEdit};
    
    &:focus-visible {
      outline: 0
    }
  }
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
  color: ${props => props.theme.todo.footerLink};
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

  @media only screen and (max-width: 762px) {
    flex-wrap: wrap;
  }  
`

export const TodoCount = styled.span`
  align-self: center;
  
  @media only screen and (max-width: 762px) {
    margin-bottom: 20px;
  }
`

export const TodoFilters = styled.ul`
  align-self: center;
  list-style: none;
  display: inline-block;
  padding: 0;
  margin: 0;
  
  @media only screen and (max-width: 762px) {
    margin-bottom: 20px;
  }
`

export const TodoFiltersItem = styled.li`
  display: inline-block;
  margin-left: 5px;
  margin-right: 5px;
`