import { Link } from 'react-router-dom';
import Banner from '../../components/Banner';
import NavBar from '../../components/NavBar';
import Rodape from '../../components/Rodape';

export default function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <div className="flex justify-center items-center my-8 mx-0 flex-wrap">
        <img src="/imagens/cozinhar_01.jpg" alt="Um prato conceitual" className="max-h-[185px]" />
        <div className="text-center p-[30px] text-[#fff] bg-[#f2745f]">
          <h2 className="max-w-[70%] inline-block">
            A melhor rede de restaurantes!
          </h2>
          <div>
            <p>
              seja um parceiro agora:
            </p>
            <p>
              ligue para
              <a href="callto:99999999999" className="no-underline text-[#631406] font-bold">
                (99) 99999-999
              </a>
            </p>
          </div>
        </div>
        <img src="/imagens/cozinhar_02.jpg" alt="Um hambúrguer desconstruído" className="max-h-[185px]" />
      </div>
      <div className="flex justify-evenly flex-wrap items-center">
        <div className="text-center">
          <img src="/imagens/cafedamanha.png" alt="Café da manhã" className="max-w-[100%] overflow-hidden rounded-[50%] border-[10px] border-solid border-[#b4b4b4]" />
          <h4 className="mt-5 text-[22px] mb-0 font-semibold text-[#121212]">
            Café da manhã
          </h4>
        </div>
        <div className="text-center">
          <img src="/imagens/almoco.png" alt="Almoço" className="max-w-[100%] overflow-hidden rounded-[50%] border-[10px] border-solid border-[#b4b4b4]" />
          <h4 className="mt-5 text-[22px] mb-0 font-semibold text-[#121212]">
            Almoço
          </h4>
        </div>
        <div className="text-center">
          <img src="/imagens/jantar.png" alt="Jantar" className="max-w-[100%] overflow-hidden rounded-[50%] border-[10px] border-solid border-[#b4b4b4]" />
          <h4 className="mt-5 text-[22px] mb-0 font-semibold text-[#121212]">
            Jantar</h4>
        </div>
        <div className="text-center">
          <img src="/imagens/sobremesa.png" alt="Sobremesas" className="max-w-[100%] overflow-hidden rounded-[50%] border-[10px] border-solid border-[#b4b4b4]" />
          <h4 className="mt-5 text-[22px] mb-0 font-semibold text-[#121212]">
            Sobremesas
          </h4>
        </div>
      </div>
      <div className="text-center my-10 mx-0">
        <h3>
          Conheça os melhores restaurantes
        </h3>
        <p>
          <Link to='/restaurantes'>
            Clique aqui
          </Link>
        </p>
      </div>
      <Rodape />
    </>
  );
}
