import './App.css';
import Works from './components/Works';
import CircleFollowMouse from './components/CircleFollowMouse';
import Hero from './components/Hero';
import Work2 from './components/Work2';
import BlackSpace from './components/BlackSpace';
import Work3 from './components/Work3';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Up from './components/Up';

function App() {
  window.addEventListener('scroll', reveal);

  function reveal() {
    let reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
      let windowheight = window.innerHeight;
      let revealtop = reveals[i].getBoundingClientRect().top;
      let revealpoint = 150;

      if (revealtop < windowheight - revealpoint) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active');
      }
    }
  }
  let calScrollVal = () => {
    let upScroll = document.getElementById('up');
    let topPos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollVal = Math.round((topPos * 100) / calcHeight);

    if (topPos > 100) {
      upScroll.style.display = 'grid';
    } else {
      upScroll.style.display = 'none';
    }
    upScroll.addEventListener('click', () => {
      document.documentElement.scrollTop = 0;
    });
    upScroll.style.background = `conic-gradient(#c2e4ff ${scrollVal}%, #d7d7d7 ${scrollVal}%)`;
  };

  window.onscroll = calScrollVal;
  window.onload = calScrollVal;

  return (
    <>
      <div>
        <Up></Up>
        <CircleFollowMouse></CircleFollowMouse>
        <Hero></Hero>
        <Works></Works>
        <BlackSpace></BlackSpace>
        <Work2></Work2>
        <Work3></Work3>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
