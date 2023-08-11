import IPrato from '../../../interfaces/IPrato';

interface PratoProps {
  prato: IPrato
}

export default function Prato({ prato }: PratoProps) {
  return (
    <div className="inline-block w-60 text-center mr-2">
      <div className="h-[230px] w-[200px] overflow-hidden rounded-2xl inline-block">
        <div>
          <div className="inline-block rounded-2xl overflow-hidden p-0 skew-y-[13deg] skew-x-0 tranform text-[0px] mt-[30px] h-[250px] w-[200px] bg-[#c8c2c2]">
            <img className="skew-y-[-13deg] skew-x-0 h-[250px] mt-[-35px] ml-[-70px]" src={prato.imagem} alt={prato.descricao} />
          </div>
        </div>
      </div>
      <div className="pt-[120px] pb-5 px-5 rounded-2xl -mt-[120px] leading-5 text-sm text-left shadow-lg shadow-[rgba(0, 0, 0, 0.2)] bg-[#fff]">
        <h3 className="mt-5 mb-[10px] text-lg">
          {prato.nome}
        </h3>
        <div className="inline-block py-3 px-4 my-4 rounded-[50px] font-bold text-[#fff] bg-[#f2745f]">
          {prato.tag}
        </div>
        <div>
          {prato.descricao}
        </div>
      </div>
    </div>)
}
