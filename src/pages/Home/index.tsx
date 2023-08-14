import { Link } from 'react-router-dom';
import Banner from '../../components/Banner';
import NavBar from '../../components/NavBar';
import Rodape from '../../components/Rodape';
import '../../components/StylesComponents/Buttons.css';

export default function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <div className="flex justify-center items-center my-10 flex-wrap">
        <img src="/imagens/cozinhar_01.jpg" alt="Um prato conceitual" className="max-h-[185px]" />
        <div className="text-center p-[30px] text-big-stone-950 bg-big-stone-300">
          <h2 className="max-w-[70%] inline-block">
            A melhor rede de restaurantes!
          </h2>
          <div>
            <p>
              seja um parceiro agora:
            </p>
            <p>
              ligue para <a href="callto:99999999999" className="no-underline text-big-stone-950 font-black">(42) 91487-0831</a>
            </p>
          </div>
        </div>
        <img src="/imagens/cozinhar_02.jpg" alt="Um hambúrguer desconstruído" className="max-h-[185px]" />
      </div>
      <div className="flex justify-evenly flex-wrap items-center">
        <div className="text-center">
          <img src="/imagens/cafedamanha.png" alt="Café da manhã" className="max-w-[100%] overflow-hidden rounded-[50%] border-[10px] border-solid border-big-stone-300" />
          <h4 className="my-4 text-xl font-semibold text-black">
            Café da manhã
          </h4>
        </div>
        <div className="text-center">
          <img src="/imagens/almoco.png" alt="Almoço" className="max-w-[100%] overflow-hidden rounded-[50%] border-[10px] border-solid border-big-stone-300" />
          <h4 className="my-4 text-xl font-semibold text-black">
            Almoço
          </h4>
        </div>
        <div className="text-center">
          <img src="/imagens/jantar.png" alt="Jantar" className="max-w-[100%] overflow-hidden rounded-[50%] border-[10px] border-solid border-big-stone-300" />
          <h4 className="my-4 text-xl font-semibold text-black">
            Jantar</h4>
        </div>
        <div className="text-center">
          <img src="/imagens/sobremesa.png" alt="Sobremesas" className="max-w-[100%] overflow-hidden rounded-[50%] border-[10px] border-solid border-big-stone-300" />
          <h4 className="my-4 text-xl font-semibold text-black">
            Sobremesas
          </h4>
        </div>
      </div>
      <div className="text-center my-10 mx-0">
        <div className="flex flex-col gap-4 items-center justify-center">
          <h3>
            Conheça os melhores restaurantes
          </h3>
          <Link to='/restaurantes' className="text-sm py-4 px-10 rounded-sm cursor-pointer uppercase font-bold shadow-button-home hover:bg-gradient-button-home text-white bg-big-stone-950">
            Clique Aqui
          </Link>
        </div>
      </div>
      <Rodape />
    </>
  );
}
