import './Main.css';
import anime from "animejs/lib/anime.es.js"

function Main() {

  setTimeout(() => {
    // Wrap every letter in a span
    var textWrapper = document.querySelector('.ml12');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    anime.timeline({loop: true})
    .add({
      targets: '.ml12 .letter',
      translateX: [40,0],
      translateZ: 0,
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: (el, i) => 500 + 30 * i
    }).add({
      targets: '.ml12 .letter',
      translateX: [0,-30],
      opacity: [1,0],
      easing: "easeInExpo",
      duration: 1100,
      delay: (el, i) => 100 + 30 * i
    });
  },1000)

  return (
    <div className="main " id='main' >
      <div className="container">
        <h1 className="ml12" id='ml12'>Four out of Five Dentists Recommend Broker</h1>
      </div>
      <div className=''>
        <button id='buttonId' className='scrollBtn mb-3' ></button>
      </div>
    </div>
  );
}

export default Main;

