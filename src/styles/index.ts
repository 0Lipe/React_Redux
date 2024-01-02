import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Nunito Sans', sans-serif;
  }
`
export const Container = styled.div`
  padding: 0 80px;
  height: 100vh;
`

export const Titulo = styled.h1`
  font-size: bold;
  color: Blue;
`
export default EstiloGlobal
