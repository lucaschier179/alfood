import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { GoTrash } from "react-icons/go";
import { MdOutlineEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import IRestaurante from "../../../interfaces/IRestaurante";

export default function AdministrarRestaurante() {
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])

  useEffect(() => {
    axios.get<IRestaurante[]>("http://0.0.0.0:8000/api/v2/restaurantes/", {
      params: {
        ordering: "nome",
      }
    })
      .then(response =>
        setRestaurantes(response.data)
      )
      .catch(erro => {
        setRestaurantes(erro)
      })
  }, [restaurantes])

  function deletarRestaurante(restaurante: IRestaurante) {
    axios.delete(`http://0.0.0.0:8000/api/v2/restaurantes/${restaurante.id}/`)
      .then(() => setRestaurantes)
      .catch((error) => {
        setRestaurantes(error)
      })
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              Nome do Restaurante
            </TableCell>
            <TableCell>
              Editar
            </TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {restaurantes.map(restaurante =>
            <TableRow key={restaurante.id}>
              <TableCell>
                {restaurante.nome}
              </TableCell>
              <TableCell>
                <IconButton color="info" title="Editar restaurante">
                  <Link to={`/admin/restaurantes/${restaurante.id}`}>
                    <MdOutlineEdit size={22} />
                  </Link>
                </IconButton>
              </TableCell>
              <TableCell>
                <IconButton color="error" title="Excluir restaurante" onClick={() => deletarRestaurante(restaurante)}>
                  <GoTrash size={22} />
                </IconButton>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
