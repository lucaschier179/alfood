import IPrato from '../../../interfaces/IPrato';

interface PratoProps {
  prato: IPrato
}

export default function Prato({ prato }: PratoProps) {
  return (
    <div className="inline-block w-60 justify-center text-center mr-2">
      <div className="h-60 w-52 overflow-hidden rounded-2xl inline-block">
        <div className="inline-block rounded-2xl overflow-hidden skew-y-12 skew-x-0 tranform mt-8 h-64 w-52 bg-silver">
          <img className="-skew-y-12 skew-x-0 h-64 -mt-8" src={prato.imagem} alt={prato.descricao} />
        </div>
      </div>
      <div className="pt-20 py-10 px-4 rounded-2xl -mt-24 text-sm text-justify shadow-lg shadow-[rgba(0, 0, 0, 0.2)] bg-white">
        <h3 className="my-2 text-lg">
          {prato.nome}
        </h3>
        <div className="inline-block p-2 mb-4 rounded-3xl font-bold bg-big-stone-300">
          {prato.tag}
        </div>
        <div>
          {prato.descricao}
        </div>
      </div>
    </div>)
}
