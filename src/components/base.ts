import styled, { createGlobalStyle} from 'styled-components';

export const WrapContainer = createGlobalStyle<any>`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
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
`;