import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Resume = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section
      id="Resume"
      className="py-[50px] px-[15px] sm:px-[30px] bg-[#03051c]  text-white"
    >
      <h1
        className="text-3xl font-semibold mb-3 text-[#00dfd8]"
        data-aos="fade-down"
      >
        Educacion y Experiencia
      </h1>
      <div className="w-[80px] h-1 rounded bg-slate-500"></div>

      <div className="flex flex-col gap-5 mt-9 sm:justify-between  sm:flex-row   ">
        <div className="basis-[50%]">
          <div className="cols">
            <h2 className="text-[#00dfd8] font-semibold text-xl my-4 mx-0">
              Resumen{" "}
            </h2>

            <div
              className="pt-0 pr-[20px] pb-0  pl-[20px]  my-5 mx-0 border-l-2 border-[#00dfd8] relative

              before:content-[''] before:absolute before:top-0 before:-left-[8px]
               before:w-[15px]  before:h-[15px] before:rounded-full  before:bg-white before:border-2 before:border-[#00dfd8]"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <h3 className="text-base font-semibold uppercase text-[#00dfd8]">
                Jorge Espinoza
              </h3>
              <p className="font-semibold italic text-sm my-[10px] mx-0 text-justify">
                Egresado de la carrera de COMPUTACIÓN E INFORMÁTICA con
                habilidades de socialización, la planificación de estrategias
                para el logro de un buen objetivo y el liderazgo. Me gusta
                aprender cosas nuevas, el poder lograr los objetivos propuestos,
                tengo interés en desarrollarse en áreas muy avanzadas como
                programación, diseño web, base de datos, me motiva trabajar en
                equipo, el progreso y la buena presencia.
              </p>
              <ul className="pb-2">
                <li className="my-2 ml-3 text-base font-medium">
                  Perú-Lima-Villa el Salvador
                </li>
                <li className="my-2 ml-3 text-base font-medium">
                  (+51) 910-552-498
                </li>
                <li className="my-2 ml-3 text-base font-medium">
                  espinozadiazjorgeluis@gmail.com
                </li>
              </ul>
            </div>

            <h3 className="text-base font-bold uppercase text-[#00dfd8]">
              Educación
            </h3>

            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <div
                className="pt-0 pr-[20px] pb-0  pl-[20px] mt-5 mx-0   border-l-2 border-[#00dfd8] relative
              before:content-[''] before:absolute before:top-0 before:-left-[8px]
               before:w-[15px]  before:h-[15px] before:rounded-full  before:bg-white before:border-2 before:border-[#00dfd8]"
              >
                <h3 className="text-[#00dfd8] uppercase font-semibold">
                  Programación Web Full-Stack y Ciencias de Computación Bootcamp
                </h3>
                <span className="py-1 px-5 text-sm font-semibold italic my-4 mx-0 inline-block rounded-sm bg-[#14b6bb]">
                  2022 - 2023
                </span>
                <p className="mb-4 italic font-medium">Academia, México</p>
                <p className="font-normal text-base pb-4 text-justify">
                  Adquirí sólidos conocimientos en los fundamentos del
                  desarrollo web, incluidos HTML, CSS y JavaScript. También
                  desarrollé habilidades en la creación de aplicaciones web
                  usando la biblioteca ReactJS y la implementación de backend
                  usando NodeJS. A través de proyectos prácticos, pude aplicar
                  este conocimiento en la creación de aplicaciones web
                  funcionales.
                </p>
              </div>

              <div
                className="pt-0 pr-[20px] pb-0  pl-[20px]   border-l-2 border-[#00dfd8] relative
              before:content-[''] before:absolute before:top-0 before:-left-[8px]
               before:w-[15px]  before:h-[15px] before:rounded-full  before:bg-white before:border-2 before:border-[#00dfd8]"
              >
                <h3 className="text-[#00dfd8] uppercase font-semibold">
                  Computacion e Informatica
                </h3>
                <span className="py-1 px-5 text-sm font-semibold italic my-4 mx-0 inline-block rounded-sm bg-[#14b6bb]">
                  2016 - 2019
                </span>
                <p className="mb-4 italic font-medium">
                  Instituto Tecnologico Cibertec, Lima, Perú
                </p>
                <p className="font-normal text-base pb-4 text-justify">
                  aprendí todo sobre la programación, automatización y adquirí
                  solidos conocimientos en algoritmos y en modelamiento de base
                  de datos
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-[50%]">
          <h2
            className="text-[#00dfd8]  text-xl my-4 mx-0   font-bold
          "
          >
            Experiencia Profesional
          </h2>
          <div
            className="pt-0 pr-[20px] pb-0  pl-[20px]  my-5 mx-0 border-l-2 border-[#00dfd8] relative
              before:content-[''] before:absolute before:top-0 before:-left-[8px]
               before:w-[15px]  before:h-[15px] before:rounded-full  before:bg-white before:border-2 before:border-[#00dfd8]"
            data-aos="fade-left"
            data-aos-offset="500"
            data-aos-duration="1000"
          >
            <h3 className="text-base font-semibold uppercase text-[#00dfd8]">
              Desarrollador Frontend React
            </h3>
            <span className="py-1 px-5 text-sm font-semibold italic my-4 mx-0 inline-block rounded-sm bg-[#14b6bb]">
              2023 - 2023
            </span>
            <p className="text-base italic font-normal">
              Buenos Aires, Argentina
            </p>
            <ul className="pb-1">
              <li className="my-[10px] mx-0 text-base text-justify font-normal ">
                Contribuí e implemente diseños de interfaz de usuario y
                funcionales utilizando componentes en React.
              </li>
              <li className="my-[10px] mx-0 text-base text-justify font-normal">
                Trabajé en equipo utilizando herramientas de control de
                versiones como Git y las metodologias ágiles para la entrega de
                las tareas asignadas a tiempo
              </li>

              <li className="my-[10px] mx-0 text-base text-justify font-normal">
                Realizar pruebas para asegurar que se cumplio con todos los
                requisitos y estándares de calidad que se iba a realizar al
                inicio del proyecto
              </li>
              <li className="my-[10px] mx-0 text-base text-justify font-normal">
                Se logro realizar el proyecto acabado en un tiempo estimado de 4
                semanas, con todos los requisitos propuestos
              </li>
              <li className="text-right mx-0 text-lg text-[#00dfd8] font-semibold ">
                <a
                  href="https://tu-destino-app-client.vercel.app/"
                  target={"_blank"}
                >
                  Dar click aquí para visualizar el proyecto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
