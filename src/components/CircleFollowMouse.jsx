function CircleFollowMouse() {
  setTimeout(function () {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll('.circle');
    let padre;

    circles.forEach(function (circle) {
      circle.x = 0;
      circle.y = 0;
    });

    window.addEventListener('mousemove', function (e) {
      coords.x = e.pageX;
      coords.y = e.pageY;

      padre = e.target.closest('.div-padre');
    });

    function animatedCircles() {
      let x = coords.x;
      let y = coords.y;

      circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + 'px';
        circle.style.top = y - 12 + 'px';

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;

        const padreClass = padre ? padre.classList[0] : null;

        if (padreClass === 'dark') {
          circle.classList.remove('Rdark');
          circle.classList.add('white');
        } else if (padreClass === 'white') {
          circle.classList.remove('white');
          circle.classList.add('Rdark');
        }
      });

      requestAnimationFrame(animatedCircles);
    }
    animatedCircles();
  }, 100);

  setTimeout(() => {
    var textos = document.querySelectorAll('.oculto');
    for (var i = 0; i < textos.length; i++) {
      textos[i].style.opacity = 1;
    }
  }, 500);

  return (
    <>
      <div className="circle oculto md:block hidden"></div>
      <div className="circle oculto md:block hidden"></div>
      <div className="circle oculto md:block hidden"></div>
      <div className="circle oculto md:block hidden"></div>
      <div className="circle oculto md:block hidden"></div>
      <div className="circle oculto md:block hidden"></div>
      <div className="circle oculto md:block hidden"></div>
      <div className="circle oculto md:block hidden"></div>
      <div className="circle oculto md:block hidden"></div>
      <div className="circle oculto md:block hidden"></div>
      <div className="circle oculto md:block hidden"></div>
      <div className="circle oculto md:block hidden"></div>
      <div className="circle oculto md:block hidden"></div>
      <div className="circle oculto md:block hidden"></div>
      <div className="circle oculto md:block hidden"></div>
      <div className="circle oculto md:block hidden"></div>
      <div className="circle oculto md:block hidden"></div>
      <div className="circle oculto md:block hidden"></div>
      <div className="circle oculto md:block hidden"></div>
      <div className="circle oculto md:block hidden"></div>
      <div className="circle oculto md:block hidden"></div>
      <div className="circle oculto md:block hidden"></div>
    </>
  );
}

export default CircleFollowMouse;
