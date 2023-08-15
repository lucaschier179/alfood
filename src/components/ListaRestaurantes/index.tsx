import { Button, IconButton } from '@mui/material';
import axios, { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import { MdSearch } from 'react-icons/md';
import { IPaginacao } from '../../interfaces/IPaginacao';
import IRestaurante from '../../interfaces/IRestaurante';
import Restaurante from './Restaurante';

interface IParametrosBusca {
  ordering?: string;
  search?: string;
}

export default function ListaRestaurantes() {
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])
  const [paginaAnterior, setPaginaAnterior] = useState('')
  const [proximaPagina, setProximaPagina] = useState('')
  const [busca, setBusca] = useState('')

  function carregarDados(url: string, opcoes: AxiosRequestConfig = {}) {
    axios.get<IPaginacao<IRestaurante>>(url, opcoes)
      .then(response => {
        setRestaurantes(response.data.results)
        setPaginaAnterior(response.data.previous)
        setProximaPagina(response.data.next)
      })
      .catch(erro => {
        alert(erro)
      })
  }

  function buscar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const opcoes = {
      params: {

      } as IParametrosBusca
    }
    if (busca) {
      opcoes.params.search = busca
    }
    carregarDados('http://localhost:8000/api/v1/restaurantes/', opcoes)
  }

  useEffect(() => {
    carregarDados('http://0.0.0.0:8000/api/v1/restaurantes/')
  }, [])

  return (
    <section className="p-8">
      <h1 className="mb-8 text-3xl font-bold">
        Os restaurantes mais <em>bacanas</em>!
      </h1>
      <form onSubmit={buscar} className="flex flex-row items-center gap-2">
        <input type="text" value={busca} placeholder="Buscar..." onChange={e => setBusca(e.target.value)} className="h-10 w-full p-2 rounded-md border border-big-stone-400 placeholder-stone-600" />
        <Button variant="contained" type="submit">
          <IconButton size="small" color="inherit" title="Pesquisar restaurante">
            <MdSearch />
          </IconButton>
        </Button>
      </form>
      {restaurantes?.map(item =>
        <Restaurante restaurante={item} key={item.id} />
      )}
      <div className="flex flex-row justify-between mt-8">
        <Button
          onClick={e => carregarDados(paginaAnterior)}
          disabled={!paginaAnterior}
          startIcon={<GoArrowLeft size={25} />}
          variant="contained"
          color="info"
          size='large'>
          Página Anterior
        </Button>
        <Button
          onClick={e => carregarDados(proximaPagina)}
          disabled={!proximaPagina}
          startIcon={<GoArrowRight size={25} />}
          variant="contained"
          color="info">
          Próxima Página
        </Button>
      </div>
    </section>
  )
}
