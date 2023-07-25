import axios from 'axios';
import { useEffect, useState } from 'react';
import { IPaginacao } from '../../interfaces/IPaginacao';
import IRestaurante from '../../interfaces/IRestaurante';
import style from './ListaRestaurantes.module.scss';
import Restaurante from './Restaurante';

export default function ListaRestaurantes() {
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])
  const [proximaPagina, setProximaPagina] = useState('')

  useEffect(() => {
    axios.get<IPaginacao<IRestaurante>>('http://0.0.0.0:8000/api/v1/restaurantes/')
      .then(response => {
        setRestaurantes(response.data.results)
        setProximaPagina(response.data.next)
      })
      .catch(erro => {
        console.log(erro)
      })
  }, [])

  function verMais() {
    axios.get<IPaginacao<IRestaurante>>(proximaPagina)
      .then(response => {
        setRestaurantes([...restaurantes, ...response.data.results])
        setProximaPagina(response.data.next)
      })
      .catch(erro => {
        console.log(erro)
      })
  }

  return (
    <section className={style.ListaRestaurantes}>
      <h1>
        Os restaurantes mais <em>bacanas</em>!
      </h1>
      {restaurantes?.map(item =>
        <Restaurante restaurante={item} key={item.id} />
      )}
      {proximaPagina &&
        <button onClick={verMais}>
          Ver mais
        </button>
      }
    </section>
  )
}
