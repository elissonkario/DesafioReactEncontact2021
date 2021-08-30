import styled, {createGlobalStyle, css} from 'styled-components';

export const WrapContainer = createGlobalStyle<any>`
  body {
    background: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.2s ease;
  }
`


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 550px;
  margin: 0 auto 30px;
  max-width: 50em;
  padding-left: 15px;
  padding-right: 15px;
  
  @media only screen and (max-width: 762px) {
    width: 100%;
    margin: 0;
    padding: 0;
  }

  &.menu-open {    
    .menu {
      left: 0;
    }

    .btn-menu {
      left: 280px !important;
    }
  }

`;

export const Footer = styled.footer`
  margin-top: 40px;
  text-align: center;
  z-index: 10;
  position: relative;
  
  ul {
    list-style: none;
    padding-left: 0;
    li {
      font-size: 12px;
      line-height: 20px;
      color: ${props => props.theme.todo.footerLink};
      opacity: 0.6;
    }
  }
`

export const FlagIcon = styled.img<{state: string}>`
  width: 24px;
  opacity: 0.4;

  ${props => props.state === 'active' && css`
    opacity: 1;
  `}
`

export const MaskEdit = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
`

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`

export const Menu = styled.aside`
  position: absolute;
  left: -270px;
  width: 270px;
  background:  ${props => props.theme.todo.container};
  top: 0;
  bottom: 0;
  z-index: 10;

  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;
  
  .change-wallpaper {
    padding: 0;
    width: 80%;
    display: block;
    margin: auto;
    
    img {
      display: block;
      max-width: 100%;
      border-radius: 10px;
    }    
  }
  
  h3 {
    text-align: center;
  }  
`
