import { useSelector } from 'react-redux'

import Contato from '../components/Contato'
import { Titulo } from '../styles'

import { RootReducer } from '../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <main>
      <Titulo>Contatos</Titulo>
      <ul>
        {itens.map((c) => (
          <li key={c.nome}>
            <Contato
              email={c.email}
              numero={c.numero}
              nome={c.nome}
              id={c.id}
            />
          </li>
        ))}
      </ul>
    </main>
  )
}

export default ListaDeContatos
