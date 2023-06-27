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
              Trendy Haven is a <strong>E-commerce</strong> in which you can
              purchase various products, with options to register, store, make
              and view your orders, including payment simulation
            </h5>
            <h5 className="p-2">
              It is developed to demonstrate capabilities{' '}
              <strong>Full-stack</strong>, use a <strong>MERN</strong> set so it
              is a complete and competitive site
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
