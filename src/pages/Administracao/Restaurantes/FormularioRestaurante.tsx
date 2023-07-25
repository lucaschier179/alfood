import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";

export default function FormularioRestaurante() {
  const [nomeRestaurante, setNomeRestaurante] = useState('')

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    axios.post("http://0.0.0.0:8000/api/v2/restaurantes/", {
      nome: nomeRestaurante
    })
      .then(() => {
        alert("Restaurante cadastrado com sucesso!")
      })
      .catch(erro => {
        alert(erro)
      })
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <TextField
        id="standard-basic"
        label="Nome do Restaurante"
        variant="standard"
        value={nomeRestaurante}
        onChange={e => setNomeRestaurante(e.target.value)}
      />
      <Button type="submit" variant="outlined">
        Salvar
      </Button>
    </form>
  )
}
