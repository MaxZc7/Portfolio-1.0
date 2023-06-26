import html from '../assets/htmlicon.jpg';
import css from '../assets/cssicon.jpg';
import js from '../assets/jsicon.jpg';
import react from '../assets/react.svg';
import tailwind from '../assets/tailwindicon.jpg';
import nodejs from '../assets/nodejsicon.jpg';
import python from '../assets/pythonicon.jpg';
import mongodb from '../assets/mongodbicon.jpg';
import git from '../assets/giticon.jpg';
import tayl from '../assets/taylPage.png';

export default function Works() {
  return (
    <div className="dark h-screen div-padre ">
      <div className="reveal">
        <div className=" md:pt-[15vh] pt-[6vh] md:flex md:text-start text-center max-w-[1300px] justify-center  mx-auto ">
          <h4 className="textsWhite text-xl md:m-4 md:mb-0 mb-[5vh] ">
            Tech Pool
          </h4>
          <div className="bg-gray-500 h-9 w-[2px] m-3 md:block hidden"></div>
          <div className="m-3 md:flex md:flex-row grid grid-cols-3  justify-items-center gap-10">
            <img src={html} className="w-[5vh] iconAnim"></img>
            <img src={css} className="w-[5vh] iconAnim"></img>
            <img src={js} className="w-[5vh] rounded-md iconAnim"></img>
            <img src={react} className="w-[5vh] iconAnim"></img>
            <img src={tailwind} className="w-[5vh] iconAnim"></img>
            <img src={nodejs} className="w-[5vh] iconAnim"></img>
            <img src={python} className="w-[5vh] iconAnim"></img>
            <img src={mongodb} className="w-[5vh] iconAnim"></img>
            <img src={git} className="w-[5vh] whiteColor iconAnim"></img>
          </div>
        </div>
        <div className="flex  justify-center md:pt-[15vh] pt-[4vh] mx-auto items-center">
          <h4 className="textsWhite flex flex-col gap-[8vh] text-6xl">
            <p className="textsS md:text-6xl text-4xl ">&lt;My Works /&gt;</p>
            <p className="md:text-5xl text-3xl textsS text-center">Tayl</p>
          </h4>
        </div>

        <div className="md:grid md:grid-cols-2 flex flex-col md:mt-[15vh] mt-[5vh] max-w-[1800px] mx-auto gap-10 ">
          <div className="flex  justify-center">
            <a
              href="https://magical-mooncake-258827.netlify.app/"
              target="__BLANK"
            >
              <img
                src={tayl}
                className="border-4 projectAnimWhite rounded-lg "
              ></img>
            </a>
          </div>
          <div className="flex flex-col md:gap-[9.5vh]  gap-[1vh] tracking-wide">
            <div className="text-center ">
              <h4 className="textsWhite md:text-2xl text-sm p-2  text-center mx-auto">
                Tayl es una empresa que se dedica a guiar{' '}
                <strong>startups</strong> y marcas que han arrancado en el
                mercado recientemente y necesiten ayuda para mejorar su diseñó
                de marca o su crecimiento
              </h4>
            </div>
            <div className="text-center ">
              <h4 className="textsWhite md:text-2xl text-sm p-2  text-center mx-auto">
                Fue creada para mostrar un ejemplo de{' '}
                <strong>landing page</strong> con unico diseño y trabajo
                <strong> front-end</strong>, tambien fue aplicado un embed de
                calendly para solicitar citas de manera eficiente{' '}
              </h4>
            </div>
            <div className="flex justify-center md:h-0 h-[15vh] items-center ">
              <a
                href="https://github.com/MaxZc7/Tayl-LandingPage"
                target="__BLANK"
                className="iconWhite absolute translate-x-[6vh]"
              >
                <i className="fab fa-github"></i>
              </a>

              <a
                href="https://magical-mooncake-258827.netlify.app/"
                target="__BLANK"
                className="iconWhite absolute -translate-x-[6vh]"
              >
                <i className="fa-solid fa-paperclip"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
