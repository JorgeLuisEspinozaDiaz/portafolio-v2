import React from "react";

import style from "./style/project.module.css";

const Contact = () => {
  return (
    <section
      id="Contact"
      className="  py-[50px] px-[15px] bg-[#03051c]  text-white"
    >
      <h1 className="text-3xl font-semibold mb-3 text-[#00dfd8]">Contacto</h1>
      <div className="w-[80px] h-1 rounded bg-slate-500"></div>
      <p className="text-lg text-justify mt-4 font-medium  ">
        Puedes contactarme enviándome un correo electrónico
      </p>

      <div className="mt-[50px] flex flex-col gap-8  md:flex-row ">
        <div
          className={`${style.box} basis-[40%] 
            p-[30px] rounded-[5px] `}
        >
          <div className="flex gap-4 items-center my-[30px] mx-0  ">
            <div>
              <a href="mailto:espinozadiazjorgeluis@gmail.com">
                <i
                  className="fa-sharp fa-solid fa-envelope w-[40px] h-[40px] rounded-full  text-center leading-[36px] text-xl
              border-solid border-2 border-sky-500 transition-all duration-200  hover:bg-[#ddd9d9] text-black bg-[#00dfd8]  cursor-pointer"
                ></i>
              </a>
            </div>
            <div>
              <h2 className="text-xl font-semibold ">Email:</h2>
              <p className="text-white text-base">
                <a href="mailto:espinozadiazjorgeluis@gmail.com">
                  espinozadiazjorgeluis@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-center ">
            <div>
              <i
                className="fa-sharp fa-solid fa-location-dot w-[40px] h-[40px] rounded-full  bg-[#00dfd8] hover:bg-[#ddd9d9] text-center leading-[36px] text-xl
              border-solid border-2 border-sky-500 text-black cursor-pointer"
              ></i>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Ubicacion:</h2>
              <span className=" text-base text-white">
                Lima-Perú-Villa El Salvador
              </span>
            </div>
          </div>

          <div className="flex  gap-4 items-center my-[30px] mx-0  ">
            <div>
              <a href="tel:+51910552498">
                <i
                  className="fa-sharp fa-solid fa-phone w-[40px] h-[40px] rounded-full   text-center leading-[36px] text-xl 
              border-solid border-2 border-sky-500 text-black bg-[#00dfd8] hover:bg-[#ddd9d9] cursor-pointer"
                ></i>
              </a>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Telefono:</h2>
              <a href="tel:+51910552498">
                <span className=" text-base text-white">
                  {" "}
                  (+51) 910-552-498
                </span>
              </a>
            </div>
          </div>

          <div className="border-solid border-4 border-sky-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.36962900743!2d-76.9569296239588!3d-12.223233145213491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105bbd0ebec2b9d%3A0xe498c329cdbff3a2!2sLa%20Ponderosa!5e0!3m2!1ses-419!2spe!4v1678921419495!5m2!1ses-419!2spe"
              width="100%"
              height="250"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className={`${style.box} basis-[60%]   p-[30px] rounded-[5px] `}>
          <form className="grid grid-cols-1   ">
            <div className="w-full mt-6 ">
              <input
                className="w-full h-10 py-[10px] px-[20px] text-base rounded-[4px]  font-medium 
                focus:outline-none focus:border-2 focus:border-cyan-500 focus:ring-green-700 focus:ring-1 border border-[#5b5a5a]"
                type="text"
                placeholder="Nombre"
              />
            </div>
            <div className="w-full  mt-6">
              <input
                className="w-full h-10 py-[10px] px-[20px] text-base rounded-[4px]  font-medium
                focus:outline-none focus:border-2 focus:border-cyan-500 focus:ring-green-700 focus:ring-1"
                type="text"
                placeholder="email"
              />
            </div>
            <div className="w-full  mt-6">
              <textarea
                className="w-full  py-[10px] px-[20px] text-base rounded-[4px]  font-medium outline-none 
                focus:border-2  focus:border-[#00dfd8] focus:ring-[#00dfd8] focus:ring-1 resize-none"
                rows="12"
                placeholder="mensaje"
              />
            </div>
            <div className="w-full  mt-6">
              <button
                className="w-full text-white font-bold  h-10  text-lg rounded-[4px] bg-[#14b6bb]  cursor-pointer"
                type="submit"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
