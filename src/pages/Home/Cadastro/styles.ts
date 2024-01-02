import InputMask from 'react-input-mask'
import styled from 'styled-components'
import variaveis from '../../../styles/variaveis'
import { Link } from 'react-router-dom'

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  padding: 8px;
`
export const Campo = styled.input`
  padding: 8px;
  border-radius: 8px;
`
export const Campoi = styled(InputMask)`
  padding: 8px;
  border-radius: 8px;
`
export const Botao = styled.button`
  background-color: ${variaveis.verde};
  padding: 8px;
  margin: 8px;
  border-radius: 8px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: none;
`
export const LinkA = styled(Link)`
  background-color: ${variaveis.vermelho};
  text-align: center;
  text-decoration: none;
  color: #fff;
  padding: 8px;
  margin: 8px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
`
