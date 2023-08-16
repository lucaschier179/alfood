import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import { GoTrash } from "react-icons/go";
import { MdOutlineEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import http from "../../../components/http";
import IRestaurante from "../../../interfaces/IRestaurante";

export default function AdministrarRestaurante() {
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])

  useEffect(() => {
    http.get<IRestaurante[]>("restaurantes/", {
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
    http.delete(`restaurantes/${restaurante.id}/`)
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
