import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import http from "../../components/http";
import IRestaurante from "../../interfaces/IRestaurante";
import ITag from "../../interfaces/ITag";

export default function AdicionarPratos() {
  const [nomePrato, setNomePrato] = useState('')
  const [descricaoPrato, setDescricaoPrato] = useState('')
  const [imagemPrato, setImagemPrato] = useState<File | null>(null)

  const [tag, setTag] = useState("")
  const [restaurante, setRestaurante] = useState("")

  const [tags, setTags] = useState<ITag[]>([])
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])

  useEffect(() => {
    http.get<{ tags: ITag[] }>("tags/")
      .then(response => setTags(response.data.tags))
      .catch(error => {
        console.log(error.response.data.nome)
        alert(error.response.data.nome)
      })
    http.get<IRestaurante[]>("restaurantes/")
      .then(response => setRestaurantes(response.data))
      .catch(error => {
        console.log(error.response.data.nome)
        alert(error.response.data.nome)
      })
  }, [])

  function selecionaImagem(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files?.length) {
      setImagemPrato(e.target.files[0])
    } else {
      setImagemPrato(null)
    }
  }

  function limparFormulario() {
    setNomePrato("")
    setDescricaoPrato("")
    setTag("")
    setRestaurante("")
    setImagemPrato(null)
  }

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData()
    formData.append("nome", nomePrato)
    formData.append("descricao", descricaoPrato)
    if (imagemPrato) {
      formData.append("imagem", imagemPrato)
    }
    formData.append("tag", tag)
    formData.append("restaurante", restaurante)
    await http.post("pratos/", formData)
      .then((res) => {
        limparFormulario()
        alert("Prato cadastrado com sucesso!")
      })
      .catch((error) => {
        alert(error.response.data.nome)
        console.log(error.response.data.nome)
      })
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Typography component="h1" variant="h6">Adicionar Pratos</Typography>
      <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 1 }} component="form" onSubmit={handleFormSubmit}>
        <TextField
          value={nomePrato}
          onChange={e => setNomePrato(e.target.value)}
          label="Nome do Prato"
          variant="standard"
          margin="dense"
          size="small"
          fullWidth
          required
        />
        <TextField
          value={descricaoPrato}
          onChange={e => setDescricaoPrato(e.target.value)}
          label="Descrição do Prato"
          variant="standard"
          margin="dense"
          size="small"
          fullWidth
          required
        />
        <FormControl
          margin="dense"
          fullWidth
        >
          <InputLabel id="select-tag">Tag</InputLabel>
          <Select labelId="select-tag" value={tag} onChange={e => setTag(e.target.value)}>
            {
              tags.map(tag => (
                <MenuItem key={tag.id} value={tag.value}>
                  {tag.value}
                </MenuItem>
              ))
            }
          </Select>
        </FormControl>
        <FormControl
          margin="dense"
          fullWidth
        >
          <InputLabel id="select-restaurante">Restaurante</InputLabel>
          <Select labelId="select-restaurante" value={restaurante} onChange={e => setRestaurante(e.target.value)}>
            {
              restaurantes.map(restaurante => (
                <MenuItem key={restaurante.id} value={restaurante.id}>
                  {restaurante.nome}
                </MenuItem>
              ))
            }
          </Select>
        </FormControl>
        <input type="file" onChange={selecionaImagem} />
        <Button
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
