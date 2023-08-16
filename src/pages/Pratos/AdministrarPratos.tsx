import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import { GoTrash } from "react-icons/go";
import { MdOutlineEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import http from "../../components/http";
import IPrato from "../../interfaces/IPrato";

export default function AdministrarPratos() {
  const [pratos, setPratos] = useState<IPrato[]>([])

  useEffect(() => {
    http.get<IPrato[]>("pratos/", {
      params: {
        ordering: "nome",
      }
    })
      .then(response =>
        setPratos(response.data)
      )
      .catch(erro => {
        setPratos(erro)
      })
  }, [pratos])

  function deletarPratos(prato: IPrato) {
    http.delete(`pratos/${prato.id}/`)
      .then(() => setPratos)
      .catch((error) => {
        setPratos(error)
      })
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              Nome do Prato
            </TableCell>
            <TableCell>
              Tag
            </TableCell>
            <TableCell>
              Imagem do Prato
            </TableCell>
            <TableCell />
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {pratos.map(prato =>
            <TableRow key={prato.id}>
              <TableCell>
                {prato.nome}
              </TableCell>
              <TableCell>
                {prato.tag}
              </TableCell>
              <TableCell>
                <a href={prato.imagem} target="_blank" rel="noreferrer">
                  Ver imagem
                </a>
              </TableCell>
              <TableCell>
                <IconButton color="info" title="Editar prato">
                  <Link to={`/admin/pratos/${prato.id}`}>
                    <MdOutlineEdit size={22} />
                  </Link>
                </IconButton>
              </TableCell>
              <TableCell>
                <IconButton color="error" title="Excluir prato" onClick={() => deletarPratos(prato)}>
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
