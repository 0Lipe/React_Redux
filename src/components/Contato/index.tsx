import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import * as S from './styles'
import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({
  nome,
  email: emailOriginal,
  numero: numeroOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [email, setEmail] = useState('')
  const [numero, setNumero] = useState(0)
  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [emailOriginal])

  useEffect(() => {
    if (numeroOriginal > 0) {
      setNumero(numeroOriginal)
    }
  }, [numeroOriginal])

  return (
    <S.Card>
      <S.Nome>{nome}</S.Nome>
      <S.AreaInput>
        <S.Campo
          disabled={!estaEditando}
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
        />
        <S.Campo
          disabled={!estaEditando}
          value={numero}
          onChange={(evento) => setNumero(parseInt(evento.target.value))}
        />
      </S.AreaInput>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    email,
                    numero,
                    id,
                    nome
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </S.BotaoSalvar>
            <S.BotaoCancelar
              onClick={() => {
                setEstaEditando(false)
                setEmail(emailOriginal)
                setNumero(numeroOriginal)
              }}
            >
              Cancelar
            </S.BotaoCancelar>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelar onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelar>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}
export default Contato
