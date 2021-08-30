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

`;

export const Footer = styled.footer`
  margin-top: 30px;
  text-align: center;
`

export const FlagIcon = styled.img<{state: string}>`
  width: 24px;
  opacity: 0.4;

  ${props => props.state === 'active' && css`
    opacity: 1;
  `}
`