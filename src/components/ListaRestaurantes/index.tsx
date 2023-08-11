import axios from 'axios';
import { useEffect, useState } from 'react';
import { IPaginacao } from '../../interfaces/IPaginacao';
import IRestaurante from '../../interfaces/IRestaurante';
import Restaurante from './Restaurante';

export default function ListaRestaurantes() {
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])
  const [paginaAnterior, setPaginaAnterior] = useState('')
  const [proximaPagina, setProximaPagina] = useState('')

  function carregarDados(url: string) {
    axios.get<IPaginacao<IRestaurante>>(url)
      .then(response => {
        setRestaurantes(response.data.results)
        setPaginaAnterior(response.data.previous)
        setProximaPagina(response.data.next)
      })
      .catch(erro => {
        alert(erro)
      })
  }

  useEffect(() => {
    carregarDados('http://0.0.0.0:8000/api/v1/restaurantes/')
  }, [])

  return (
    <section className="mt-6 p-8">
      <h1>
        Os restaurantes mais <em>bacanas</em>!
      </h1>
      {restaurantes?.map(item =>
        <Restaurante restaurante={item} key={item.id} />
      )}
      {
        <button onClick={e => carregarDados(paginaAnterior)} disabled={!paginaAnterior}>
          Página Anterior
        </button>
      }
      {
        <button onClick={e => carregarDados(proximaPagina)} disabled={!proximaPagina}>
          Próxima Página
        </button>
      }
    </section>
  )
}
