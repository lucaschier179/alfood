import axios from 'axios';
import { useEffect, useState } from 'react';
import IPrato from '../../../interfaces/IPrato';
import IRestaurante from '../../../interfaces/IRestaurante';
import Prato from '../Prato';

interface RestauranteProps {
  restaurante: IRestaurante
}

export default function Restaurante({ restaurante }: RestauranteProps) {
  const [pratos, setPratos] = useState<IPrato[]>()

  useEffect(() => {
    axios.get<IPrato[]>(`http://localhost:8000/api/v1/restaurantes/${restaurante.id}/pratos/`)
      .then(response => {
        setPratos(response.data)
      })
  }, [restaurante.id])

  return (
    <section className="mt-8 p-[30px] bg-[#f2f6ff]">
      <div className="{estilos.Titulo} text-[28px] font-medium leading-6 pb-[15px] relative w-auto box-border inline-block">
        <h2 className="m-0 w-auto 
        before:absolute before:left-0 before:bottom-0 before:h-[5px] before:w-[55px] before:bg-[#111] after:absolute after:left-0 after:bottom-[2px] after:h-[1px] 
        after:w-full after:max-w-full after:bg-[#333]"
        >
          {restaurante.nome}
        </h2>
      </div>
      <div>
        {pratos?.map(item =>
          <Prato prato={item} key={item.id} />
        )}
      </div>
    </section>
  )
}
