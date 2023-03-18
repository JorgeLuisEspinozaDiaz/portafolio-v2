import React from "react";
import crud from "../../public/projects/crud.png";
import ecommerce from "../../public/projects/ecommerce.png";
import pokemon from "../../public/projects/pokemon.png";
import quotes from "../../public/projects/quotes.png";
import rick from "../../public/projects/rickandmorty.png";
import weather from "../../public/projects/weather.png";
import destino from "../../public/projects/destino.png";
import style from "./style/project.module.css";

const Projects = () => {
  return (
    <section
      id="Project"
      className=" py-[50px] px-[15px] bg-[#03051c] text-blue-50"
    >
      <h1 className="text-3xl font-semibold mb-3 text-[#00dfd8]">Proyectos</h1>
      <div className="w-[80px] h-1 rounded bg-slate-500"></div>
      <p className="text-lg text-justify mt-4 font-medium  ">
        Estos son algunos proyectos que he desarrollado en distintas áreas del
        desarrollo web con mucha dedicación.
      </p>
      {/* //?item 1 */}
      <div className="mt-[50px]  px-[20px] grid grid-cols-3 gap-9  max-[600px]:grid-cols-1 max-[1300px]:grid-cols-2">
        <figure
          className={`${style.project__figure}  ${style.box} w-full h-80  relative overflow-hidden rounded-lg `}
        >
          <img
            className={`${style.figure__img} w-full h-full transition-all duration-500 ease-out object-cover`}
            src={destino}
            alt=""
          />

          <div
            className={`${style.capa} absolute bottom-0 w-full h-full bg-[rgba(0,0,0,.7)]	 translate-y-full  transition-all duration-500 ease-out`}
          >
            <div className="p-5 relative ">
              <h4 className="text-white text-center text-3xl font-bold">
                Tu DestinoAPP
              </h4>
              <p className=" mt-4 text-justify italic font-medium text-slate-400 text-sm  md:text-base  2xl:text-lg">
                Tu Destino app es una aplicación para reservas, booking de
                alojamiento, alquiler de casa, apartamento o habitación.
                Tecnologias y librerías utilizadas en el front React,
                Axios,React-Hook-Form React-Hook-Form, Redux toolkit,
                React-Router-Dom, tailwind,Javascript, HTML. En el back end
                ExpressJS y MongoBD.
              </p>
            </div>
            <div className="absolute bottom-3 right-3 flex gap-3">
              <a href="https://github.com/No-Country/c9-54-t-mern">
                <i className="fa-brands fa-github text-4xl"></i>
              </a>
              <a
                href="https://tu-destino-app-client.vercel.app/"
                target="_blank"
              >
                <i className="fa-sharp fa-solid fa-eye text-4xl"></i>
              </a>
            </div>
          </div>
        </figure>

        <figure
          className={`${style.project__figure}  ${style.box} w-full h-80  relative overflow-hidden rounded-lg `}
        >
          <img
            className={`${style.figure__img} w-full h-full transition-all duration-500 ease-out object-cover`}
            src={ecommerce}
            alt=""
          />

          <div
            className={`${style.capa} absolute bottom-0 w-full h-full bg-[rgba(0,0,0,.7)]	 translate-y-full  transition-all duration-500 ease-out`}
          >
            <div className="p-5 relative ">
              <h4 className="text-white text-center text-3xl font-bold">
                Ecommerce
              </h4>
              <p className=" mt-4 text-justify italic font-medium text-slate-400 text-sm  md:text-base  2xl:text-lg">
                El sitio de comercio electrónico , el sitio web ofrece una
                interfaz de usuario dinámica para una experiencia de compra.
                Tecnologias y librerías utilizadas en el front React,
                Axios,React-Hook-Form React-Hook-Form, Redux toolkit ,
                React-Router-Dom, Javascript, HTML y css.
              </p>
            </div>
            <div className="absolute bottom-3 right-3 flex gap-3">
              <a href="#">
                <i className="fa-brands fa-github text-4xl"></i>
              </a>
              <a href="https://e-ecommerce-jled.netlify.app/" target="_blank">
                <i className="fa-sharp fa-solid fa-eye text-4xl"></i>
              </a>
            </div>
          </div>
        </figure>

        {/* //?item 2 */}
        <figure
          className={`${style.project__figure} ${style.box} w-full h-80  relative overflow-hidden rounded-lg`}
        >
          <img
            className={`${style.figure__img} w-full h-full transition-all duration-500 ease-out object-cover`}
            src={pokemon}
            alt=""
          />

          <div
            className={`${style.capa} absolute bottom-0 w-full h-full bg-[rgba(0,0,0,.7)]	 translate-y-full  transition-all duration-500 ease-out`}
          >
            <div className="p-5 relative">
              <h4 className="text-white text-center text-3xl font-bold">
                PokeApi
              </h4>
              <p className="mt-4 text-justify italic font-medium text-slate-400 text-sm  md:text-base  2xl:text-lg">
                Una version mas sencilla de la pokedex con un diseño amigable e
                intuitivo, muestra las caracteristicas de cada pokemon.
                Tecnologias utilizadas React, HTML y CSS.
              </p>
            </div>
            <div className="absolute bottom-3 right-3 flex gap-3">
              <a href="#">
                <i className="fa-brands fa-github text-4xl"></i>
              </a>
              <a href="https://jled-pokemons.netlify.app/" target="_blank">
                <i className="fa-sharp fa-solid fa-eye text-4xl"></i>
              </a>
            </div>
          </div>
        </figure>
        {/* //?item 3 */}
        <figure
          className={`${style.project__figure}  ${style.box} w-full h-80  relative overflow-hidden rounded-lg`}
        >
          <img
            className={`${style.figure__img} w-full h-full transition-all duration-500 ease-out object-cover`}
            src={rick}
            alt=""
          />

          <div
            className={`${style.capa} absolute bottom-0 w-full h-full bg-[rgba(0,0,0,.7)]	 translate-y-full  transition-all duration-500 ease-out`}
          >
            <div className="p-5 relative">
              <h4 className="text-white text-center text-3xl font-bold">
                Rick and Morty App
              </h4>
              <p className="mt-4 text-justify italic font-medium text-slate-400 text-sm  md:text-base  2xl:text-lg">
                Realizada del consumo de una API, con sus caracteristicas,
                cuenta con una barra para busqueda personalizada por id de cada
                planeta. Tecnologias utilizadas React, Axios, HTML y CSS.
              </p>
            </div>
            <div className="absolute bottom-3 right-3 flex gap-3">
              <a>
                <i className="fa-brands fa-github text-4xl"></i>
              </a>
              <a href="https://jled-rickandmorty.netlify.app/" target="_blank">
                <i className="fa-sharp fa-solid fa-eye text-4xl"></i>
              </a>
            </div>
          </div>
        </figure>

        {/* //?item 4 */}
        <figure
          className={`${style.project__figure} ${style.box} w-full h-80 relative overflow-hidden rounded-lg`}
        >
          <img
            className={`${style.figure__img} w-full h-full transition-all duration-500 ease-out object-cover`}
            src={crud}
            alt=""
          />

          <div
            className={`${style.capa} absolute bottom-0 w-full h-full bg-[rgba(0,0,0,.7)]	 translate-y-full  transition-all duration-500 ease-out`}
          >
            <div className="p-5 relative">
              <h4 className="text-white text-center text-3xl font-bold">
                Crud-app
              </h4>
              <p className="mt-4 text-justify italic font-medium text-slate-400 text-sm  md:text-base  2xl:text-lg">
                Proyecto donde ocupe herramientas de React con Axios mientras se
                consume una API con los metodos Get, Post, Delete. Tecnologias
                utilizadas React, HTML y CSS.
              </p>
            </div>
            <div className="absolute bottom-3 right-3 flex gap-3">
              <a>
                <i className="fa-brands fa-github text-4xl"></i>
              </a>
              <a href="https://jled-form-crud.netlify.app/" target="_blank">
                <i className="fa-sharp fa-solid fa-eye text-4xl"></i>
              </a>
            </div>
          </div>
        </figure>
        {/* //?item 5 */}
        <figure
          className={`${style.project__figure} ${style.box} w-full h-80  relative overflow-hidden rounded-lg`}
        >
          <img
            className={`${style.figure__img} w-full h-full transition-all duration-500 ease-out object-cover`}
            src={weather}
            alt=""
          />

          <div
            className={`${style.capa} absolute bottom-0 w-full h-full bg-[rgba(0,0,0,.7)]	 translate-y-full  transition-all duration-500 ease-out`}
          >
            <div className="p-5 relative">
              <h4 className="text-white text-center text-3xl font-bold">
                Weather-app
              </h4>
              <p className="mt-4 text-justify italic font-medium text-slate-400 text-sm  md:text-base  2xl:text-lg">
                Construida para mostrar los datos del tiempo en tu localizacion
                ocupa una API que permite interactuar con estos datos.
                Tecnologias utilizadas React, HTML y CSS.
              </p>
            </div>
            <div className="absolute bottom-3 right-3 flex gap-3">
              <a href="#">
                <i className="fa-brands fa-github text-4xl"></i>
              </a>
              <a href="https://jlediazclimate.netlify.app" target="_blank">
                <i className="fa-sharp fa-solid fa-eye text-4xl"></i>
              </a>
            </div>
          </div>
        </figure>
        {/* //?item 6 */}
        <figure
          className={`${style.project__figure}  ${style.box} w-full h-80  relative overflow-hidden rounded-lg`}
        >
          <img
            className={`${style.figure__img} w-full h-full transition-all duration-500 ease-out object-cover`}
            src={quotes}
            alt=""
          />

          <div
            className={`${style.capa} absolute bottom-0 w-full h-full bg-[rgba(0,0,0,.7)]	 translate-y-full  transition-all duration-500 ease-out`}
          >
            <div className="p-5 relative">
              <h4 className="text-white text-center text-3xl font-bold">
                Quotes
              </h4>
              <p className="mt-4 text-justify italic font-medium text-slate-400 text-sm  md:text-base  2xl:text-lg">
                Proyecto realizado a partir de un archivo JSON, donde nos
                comparte frases celebres de algunos visionarios del pasado, al
                cambiar la frase se le asigna un nuevo color aleatorio al estilo
                mostrado en pantalla.
                <span> Hecho con React, HTML y CSS</span>
              </p>
            </div>
            <div className="absolute bottom-3 right-3 flex gap-3">
              <a href="#">
                <i className="fa-brands fa-github text-4xl"></i>
              </a>
              <a href="https://card-mix-react.netlify.app/" target="_blank">
                <i className="fa-sharp fa-solid fa-eye text-4xl"></i>
              </a>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Projects;
