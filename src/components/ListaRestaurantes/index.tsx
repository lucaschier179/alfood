import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import { MdSearch } from 'react-icons/md';
import { IPaginacao } from '../../interfaces/IPaginacao';
import IRestaurante from '../../interfaces/IRestaurante';
import http from '../http';
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
  const [ordenacao, setOrdenacao] = useState('')

  function carregarDados(url: string, opcoes: AxiosRequestConfig = {}) {
    http.get<IPaginacao<IRestaurante>>(url, opcoes)
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
    if (ordenacao) {
      opcoes.params.ordering = ordenacao
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
      <form onSubmit={buscar} className="">
        <div className="flex flex-col gap-4">
          <label htmlFor="select-ordenação">Ordenação de Restaurantes</label>
          <FormControl fullWidth>
            <InputLabel id="select-label">
              - Selecione um tipo de ordenação -
            </InputLabel>
            <Select
              name="select-ordenação"
              id="select-ordenação"
              value={ordenacao}
              onChange={e => setOrdenacao(e.target.value)}
              label=" - Selecione um tipo de ordenação - "
              labelId="select-label"
              fullWidth
            >
              <MenuItem value="Padrão">
                Padrão
              </MenuItem>
              <MenuItem value="id">
                Por ID
              </MenuItem>
              <MenuItem value="nome">
                Por Nome
              </MenuItem>
            </Select>
          </FormControl>
          <input type="text" value={busca} placeholder="Buscar por restaurantes..." onChange={e => setBusca(e.target.value)} className="h-14 w-full p-2 rounded-md border border-big-stone-400 placeholder-stone-600" />
          <Button variant="contained" type="submit" fullWidth endIcon={<MdSearch color="inherit" title="Pesquisar restaurante" />}>
            Pesquisar
          </Button>
        </div>
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
