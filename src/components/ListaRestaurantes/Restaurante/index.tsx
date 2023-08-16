import { useEffect, useState } from 'react';
import IPrato from '../../../interfaces/IPrato';
import IRestaurante from '../../../interfaces/IRestaurante';
import http from '../../http';
import Prato from '../Prato';

interface RestauranteProps {
  restaurante: IRestaurante
}

export default function Restaurante({ restaurante }: RestauranteProps) {
  const [pratos, setPratos] = useState<IPrato[]>()

  useEffect(() => {
    http.get<IPrato[]>(`http://localhost:8000/api/v1/restaurantes/${restaurante.id}/pratos/`)
      .then(response => {
        setPratos(response.data)
      })
  }, [restaurante.id])

  return (
    <section className="mt-8 p-4 rounded-2xl bg-big-stone-200">
      <div className="text-3xl font-medium leading-6 pb-4 relative w-auto box-border inline-block">
        <h2 className="m-0 w-auto
        before:absolute before:left-0 before:bottom-0 before:h-1 before:w-14 before:bg-black
        after:absolute after:left-0 after:bottom-[2px] after:h-[1px] after:w-full after:max-w-full after:bg-mine-shaft">
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
