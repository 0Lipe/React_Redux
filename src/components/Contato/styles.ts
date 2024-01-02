import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const AreaInput = styled.div`
  display: flex;
  flex-direction: column;
`
export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
  width: 570px;
`

export const Nome = styled.h3`
  font-size: Bold;
`

export const Campo = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  margin-top: 8px;
  max-width: 556px;
  resize: none;
  height: 36px;
`
export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`
export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: Blue;
  border-radius: 8px;
  margin-right: 8px;
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`
export const BotaoCancelar = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
