import { iconos } from "../data/iconos";

export const Main = () => {
  return (
    <div className=" w-full flex justify-center items-center  px-5 py-2 ">
      <div className=" w-[80%] flex flex-col justify-center items-center gap-3   px-3 py-2 ">
        <a
          href="/public/cv/alexis-alvarez-cv.pdf"
          download
          className="w-[70%] text-darkGreen bg-lightGray  font-bold  p-2 rounded-md laptop:w-[20%] cursor-pointer hover:bg-lightGreen hover:text-lightGray transition-colors"
        >
          Descargar CV
        </a>
        <h2 className=" text-2xl text-lightGreen p-2 laptop:text-5xl font-bold ">Software Developer</h2>
        <h2 className=" text-2xl text-lightGray  p-2 laptop:text-5xl font-bold">Alexis Alvarez</h2>
        <h3 className="text-xl text-gris p-2 laptop:text-2xl font-bold capitalize ">
          Estudiante en ingenieria en sistemas
        </h3>
        <p className="text-sm w-full text-lightGray p-2 laptop:text-xl laptop:w-[70%] leading-relaxed ">
          ¡Hola! Soy un <span className="text-lightGreen font-bold">Desarrollador Junior </span> con una mentalidad de
          aprendizaje continuo, enfocado en convertirme en{" "}
          <span className="text-lightGreen font-bold">Full Stack Developer. </span> Me apasiona construir aplicaciones
          web modernas, limpias y escalables. Actualmente, dedico mi tiempo a perfeccionar mis habilidades tanto en el
          <span className="text-lightGreen font-bold"> frontend </span> como en el{" "}
          <span className="text-lightGreen font-bold">backend,</span> transformando ideas en código funcional.
        </p>

        <div className="flex gap-4 p-2">
          {iconos.map((icono) => (
            <div
              className="p-4 bg-gris rounded-full hover:outline-5 hover:outline-lightGreen transition-all"
              key={icono.id}
            >
              <a href={icono.link} target="_blank">
                <img className="bg-gris  p-2 laptop:w-[50px] laptop:h-[50px] object-contain " src={icono.url} alt="" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
