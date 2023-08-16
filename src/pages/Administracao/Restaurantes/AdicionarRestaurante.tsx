import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../../../components/http";
import IRestaurante from "../../../interfaces/IRestaurante";

export default function AdicionarRestaurante() {

  const parametros = useParams()

  useEffect(() => {
    if (parametros.id) {
      http.get<IRestaurante>(`restaurantes/${parametros.id}/`)
        .then(response => setNomeRestaurante(response.data.nome))
    }
  }, [parametros])

  const [nomeRestaurante, setNomeRestaurante] = useState('')

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (parametros.id) {
      http.put(`restaurantes/${parametros.id}/`, {
        nome: nomeRestaurante
      })
        .then((response) => {
          const nomeRestauranteCadastrado = response.data.nome
          alert(`${nomeRestauranteCadastrado} editado com sucesso!`)
        })
        .catch(error => {
          const MensagemErro = error.response.data.nome
          alert(MensagemErro)
        })
    } else {
      http.post("restaurantes/", {
        nome: nomeRestaurante
      })
        .then((response) => {
          const nomeRestauranteCadastrado = response.data.nome
          alert(`${nomeRestauranteCadastrado} cadastrado com sucesso!`)
        })
        .catch(error => {
          const MensagemErro = error.response.data.nome
          alert(MensagemErro)
        })
    }
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", flexGrow: 1 }}>
      <Typography component="h1" variant="h6">Adicionar Restaurantes</Typography>
      <Box sx={{ width: "100%" }} component="form" onSubmit={handleFormSubmit}>
        <TextField
          id="standard-basic"
          label="Nome do Restaurante"
          variant="standard"
          value={nomeRestaurante}
          onChange={e => setNomeRestaurante(e.target.value)}
          fullWidth
          required
        />
        <Button
          sx={{ marginTop: 2 }}
          type="submit"
          variant="contained"
          fullWidth
        >
          Salvar
        </Button>
      </Box>
    </Box>
  )
}
