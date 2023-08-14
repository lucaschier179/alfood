import axios from 'axios';
import { useEffect, useState } from 'react';
import { IPaginacao } from '../../interfaces/IPaginacao';
import IRestaurante from '../../interfaces/IRestaurante';
import Restaurante from './Restaurante';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';

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
    <section className="p-8">
      <h1>
        Os restaurantes mais <em>bacanas</em>!
      </h1>
      {restaurantes?.map(item =>
        <Restaurante restaurante={item} key={item.id} />
      )}
      <div className="flex flex-row justify-between mt-8">
        <button onClick={e => carregarDados(paginaAnterior)} disabled={!paginaAnterior} className="flex w-44 p-2 items-center justify-between rounded-lg border-4 border-big-stone-700 text-white bg-big-stone-950 disabled:opacity-70">
          <GoArrowLeft size={25} />
          Página Anterior
        </button>
        <button onClick={e => carregarDados(proximaPagina)} disabled={!proximaPagina} className="flex w-44 p-2 items-center justify-between rounded-lg border-4 border-big-stone-700 text-white bg-big-stone-950 disabled:opacity-70">
          Próxima Página
          <GoArrowRight size={25} />
        </button>
      </div>
    </section>
  )
}
