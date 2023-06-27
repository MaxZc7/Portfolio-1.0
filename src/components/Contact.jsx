import { useRef } from 'react';
import miFoto from '../assets/miFoto.jpeg';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_s9wpktg',
        'template_3dvix08',
        form.current,
        '3G1l0MNKuaA9Xd-uj'
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('meesage sent');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="white md:h-screen h-[145vh] div-padre " id="Contact">
      <div className="flex justify-center p-[5vh]">
        <p className="absolute text-2xl">
          <strong className="text-3xl"> &lt; GET IN TOUCH &gt;</strong>
        </p>
      </div>
      <div className="md:pt-[10vh] pt-[5vh] flex flex-col  max-w-[1500px] mx-auto ">
        <div className="md:text-6xl text-4xl text-center md:text-start textsSBlack tracking-wide">
          <h5>Interested?</h5>
          <h5 className="md:py-[1vh]">Let&#8217;s connect right now!</h5>
          <p className="py-[5vh] md:text-2xl text-base  texts tracking-normal">
            Really i am not very active in the{' '}
            <strong className="md:text-3xl ">socials </strong>
            but I keep up to date daily and uploading some projects, currently
            my <strong className="md:text-3xl ">goal</strong> is to continue
            learning and
            <strong className="md:text-3xl "> developing </strong> of better
            shape!
          </p>
        </div>
        <div className="flex flex-col  md:grid md:grid-cols-2">
          <div className="flex justify-center md:justify-start items-end m-5">
            <img
              className="rounded-md md:max-w-[330px] max-w-[300px] max-h-[350px] musicEf "
              src={miFoto}
            ></img>
          </div>
          <form
            className="md:pt-[10vh] pt-[5vh]"
            ref={form}
            onSubmit={sendEmail}
          >
            <h5 className=" md:text-5xl m-1 text-3xl text-center md:text-start font-bold">
              Contact Me
            </h5>
            <div className="flex flex-col md:flex-row my-[2vh]">
              <input
                className="p-3 px-4 mx-2 border border-black rounded-md"
                type="text"
                name="user_name"
                placeholder="Name"
                required
              ></input>
              <input
                className="p-3 px-4 mx-2 border border-black rounded-md"
                type="email"
                name="user_email"
                placeholder="Email"
                required
              ></input>
            </div>
            <div className="flex flex-col md:my-[2vh]">
              <textarea
                className="w-[65.5%] p-3 md:mx-2 mx-auto border border-black rounded-md"
                rows={4}
                name="message"
                type="text"
                placeholder="Message"
                required
              ></textarea>
              <button
                type="submit"
                className="text-white dark rounded-xl md:mt-[1vh] md:mx-2 m-2 mx-auto p-4 sendMes w-[22vh]"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}

      <div className="grid max-w-[1600px] mt-[5vh] mx-auto grid-cols-5 md:pt-[10vh] justify-items-center ">
        <button className=" buttonWC  ">
          <a href="https://github.com/MaxZc7" target="__BLANK">
            <i className="fab fa-github md:text-6xl text-4xl   "></i>
          </a>
        </button>
        <div className="h-[10vh] w-[1px] bg-black "></div>
        <button className=" buttonWC  ">
          <a
            href="https://www.linkedin.com/in/maximo-zaragoza-a16331266/"
            target="__BLANK"
          >
            {' '}
            <i className="fab fa-linkedin md:text-6xl text-4xl    "></i>
          </a>
        </button>
        <div className="h-[10vh] w-[1px] bg-black "></div>
        <button className="buttonWC ">
          <a
            href="https://www.youtube.com/channel/UCZlNoFuviml-tVH2LGmC8sw"
            target="__BLANK"
          >
            <i className="fab fa-youtube md:text-6xl text-4xl    "></i>
          </a>
        </button>
      </div>
    </div>
  );
}
