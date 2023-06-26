import clinic from '../assets/clinic.png';

export default function Work3() {
  return (
    <div className="dark h-screen  tracking-wide div-padre ">
      <div className="reveal">
        <h5 className="text-center md:text-5xl text-4xl textsS md:p-[15vh] pt-[9vh]">
          Clinica Del Bosque
        </h5>
        <section className="md:grid md:grid-cols-2 max-w-[1800px] mx-auto gap-10 ">
          <a href="https://nimble-pie-7cbdd3.netlify.app/" target="__BLANK">
            <img
              src={clinic}
              className="border-4 projectAnimWhite rounded-lg mt-[7vh] md:mt-0"
            ></img>
          </a>
          <div className="flex flex-col  md:gap-[11.5vh] mt-[5vh] md:mt-0 gap-[1vh]">
            <h5 className="textsWhite md:text-2xl text-sm px-1 text-center">
              Este es un <strong>proyecto de clinica</strong> basado en una
              clinica real, con presentacion, contactos, direcciones y con toda
              la informacion para contactar al cliente con la sucural que sea
              necesaria
            </h5>
            <h5 className="textsWhite md:text-2xl  text-sm px-1 text-center">
              Es un modelo para probar diseños y <strong>experimentar</strong>{' '}
              con tecnologias como <strong>tailwind</strong>, fue hecho para una
              clinica conocida en la cual queria basarme para nuevas practicas
            </h5>
            <div className="flex justify-center md:h-0 h-[15vh] items-center ">
              <a
                href="https://github.com/MaxZc7/Clinica-del-bosque"
                target="__BLANK"
                className="iconWhite absolute translate-x-[6vh]"
              >
                <i className="fab fa-github"></i>
              </a>

              <a
                href="https://nimble-pie-7cbdd3.netlify.app/"
                target="__BLANK"
                className="iconWhite absolute -translate-x-[6vh] "
              >
                <i className="fa-solid fa-paperclip"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
