import React, { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Contato from '../../../models/Contato'
import { cadastrar } from '../../../store/reducers/contatos'
import { Botao, Campo, Campoi, Formulario, LinkA } from './styles'
import { Link } from 'react-router-dom'

const Cadastro = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [numero, setNumero] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    const contatoParaAdicionar = new Contato(nome, email, parseInt(numero), 9)
    dispatch(cadastrar(contatoParaAdicionar))
    navigate('/')
  }

  return (
    <Formulario onSubmit={cadastrarContato}>
      <Campo
        value={nome}
        onChange={(evento) => setNome(evento.target.value)}
        type="text"
        placeholder="Nome"
      />
      <Campo
        value={email}
        onChange={(evento) => setEmail(evento.target.value)}
        type="email"
        placeholder="E-mail"
      />
      <Campo
        value={numero}
        onChange={(evento) => setNumero(evento.target.value)}
        type="tel"
        placeholder="numero"
      />
      <Botao type="submit">Cadastrar</Botao>
      <LinkA as={Link} to="/">
        Voltar
      </LinkA>
    </Formulario>
  )
}

export default Cadastro
