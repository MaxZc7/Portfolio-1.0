import myFotoThumb from '../assets/miFotoThumb.png';

export default function Hero() {
  return (
    <div className="white h-screen w-full md:text-start text-center flex items-center div-padre ">
      <div className="md:hidden absolute iconsResponsive ">
        <div className="flex gap-[3vh]">
          <div className="button ">
            <div className="icon">
              <a
                href="https://www.linkedin.com/in/maximo-zaragoza-a16331266/"
                target="__BLANK"
              >
                <i className="fab fa-linkedin iconBlack"></i>
              </a>
            </div>
            <span>LinkedIn</span>
          </div>
          <div className="button">
            <div className="icon">
              <a
                href="https://www.instagram.com/maximoazaragoza/?hl=es-la"
                target="__BLANK"
              >
                <i className="fa-brands fa-instagram iconBlack"></i>
              </a>
            </div>
            <span>Instagram</span>
          </div>
          <div className="button">
            <div className="icon">
              <a href="#Contact">
                <i className="fa-solid fa-envelope iconBlack"></i>
              </a>
            </div>
            <span>Mail</span>
          </div>
        </div>
      </div>

      <div className="md:max-w-[1100px] mx-auto ">
        <img
          src={myFotoThumb}
          className="rounded-full w-[10%] musicEf mx-auto   md:mx-0"
        ></img>
        <div className=" ">
          <h1 className="md:text-6xl text-3xl texts  tracking-wide my-10">
            Hello! Im Maximo{' '}
          </h1>

          <h3 className="2xl:text-6xl lg:text-4xl  text-3xl texts tracking-wide ">
            I create amazing & interactive webapps
          </h3>
        </div>
      </div>
      <section className="md:absolute md:block hidden  left-6">
        <div className="wrapper  flex md:flex-col gap-7">
          <div className="button">
            <div className="icon">
              <a
                href="https://www.linkedin.com/in/maximo-zaragoza-a16331266/"
                target="__BLANK"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
            <span>LinkedIn</span>
          </div>

          <div className="button">
            <div className="icon">
              <a
                href="https://www.instagram.com/maximoazaragoza/?hl=es-la"
                target="__BLANK"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
            <span>Instagram</span>
          </div>

          <div className="button">
            <div className="icon">
              <a href="#Contact">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
            <span>Mail</span>
          </div>

          <div className="button">
            <div className="icon">
              <a href="https://github.com/MaxZc7" target="__BLANK">
                <i className="fab fa-github"></i>
              </a>
            </div>
            <span>Github</span>
          </div>

          <div className="button ">
            <div className="icon flex items-center">
              <a
                href="https://www.youtube.com/channel/UCZlNoFuviml-tVH2LGmC8sw"
                target="__BLANK"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
            <span>Youtube</span>
          </div>
        </div>
      </section>
      <section className="md:absolute md:block hidden right-10 md:w-[25vh] ">
        <div className="flex justify-between items-center my-5">
          <div className="bg-black h-[1px] w-[25%]"></div>
          <h4 className="text-xl">Avaible to work</h4>
        </div>
      </section>

      <div className="md:hidden absolute iconsResponsiveBottom">
        <div className="flex gap-[3vh]">
          <div className="button">
            <div className="icon">
              <a href="https://github.com/MaxZc7" target="__BLANK">
                <i className="fab fa-github iconBlack"></i>
              </a>
            </div>
            <span>Github</span>
          </div>
          <div className="button">
            <div className="icon">
              <a
                href="https://www.youtube.com/channel/UCZlNoFuviml-tVH2LGmC8sw"
                target="__BLANK"
              >
                <i className="fab fa-youtube iconBlack"></i>
              </a>
            </div>
            <span>Youtube</span>
          </div>
        </div>
      </div>
    </div>
  );
}
