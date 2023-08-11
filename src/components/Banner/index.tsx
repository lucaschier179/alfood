import estilos from './Banner.module.scss';

export default function Banner() {
  return (
    <section className={estilos.BannerArea}>
      <div className="flex flex-col items-center justify-center h-full text-3xl">
        <h1 className="uppercase m-0">
          AlFood
        </h1>
        <p>
          Felicidade em cada prato.
        </p>
      </div>
    </section>)
}
