import TrendyHaven from '../assets/TrendyHaven.png';

export default function Work2() {
  return (
    <div className="white h-screen div-padre texts md:pt-[16vh] pt-[9vh]  tracking-wide ">
      <div className="reveal">
        <h4 className="text-center text-5xl">Trendy Haven</h4>
        <img
          src={TrendyHaven}
          className="border-4 projectAnim rounded-lg md:hidden mt-[8vh]"
        ></img>
        <div className=" md:mt-[15vh] mt-[5vh] md:grid md:grid-cols-2 gap-10 max-w-[1800px] mx-auto ">
          <div className="md:text-2xl text-sm text-center flex flex-col md:gap-[10vh]   ">
            <h5 className="p-2">
              Trendy Haven es un <strong>E-commerce</strong> en el cual se
              pueden adquirir varios productos, con opciones de registrarse,
              almacenar , hacer y ver tus ordenes, incluyendo simulacion de pago
            </h5>
            <h5 className="p-2">
              Esta desarrolado para demostrar capacidades{' '}
              <strong>Full-stack</strong>, usa un conjunto <strong>MERN</strong>{' '}
              por lo que es un sitio completo y competitivo
            </h5>
            <div className="flex justify-center md:h-[5vh] h-[15vh] items-center ">
              <a
                href="https://github.com/MaxZc7/Mern-Ecommerce-TrendyHaven-A"
                target="__BLANK"
                className="iconBlack absolute translate-x-[6vh]"
              >
                <i className="fab fa-github"></i>
              </a>

              <a
                href="https://mern-trendyhavenlink.onrender.com/"
                target="__BLANK"
                className="iconBlack absolute -translate-x-[6vh]"
              >
                <i className="fa-solid fa-paperclip"></i>
              </a>
            </div>
          </div>
          <a href="https://mern-trendyhavenlink.onrender.com/" target="__BLANK">
            <img
              src={TrendyHaven}
              className="border-4 projectAnim rounded-lg hidden md:block"
            ></img>
          </a>
        </div>
      </div>
    </div>
  );
}
