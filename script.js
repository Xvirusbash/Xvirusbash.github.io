document.addEventListener("DOMContentLoaded", function() {
    const audio = new Audio("love.mp3"); 
    
    const playAudio = () => {
        audio.play().catch(error => {
            console.log("Reproducción automática bloqueada, esperando interacción del usuario.");
        });
    };
    
    playAudio();
    
    document.body.addEventListener("click", () => {
        audio.play();
    }, { once: true });
});

document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'F12') {
    e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key === 'I') {
    e.preventDefault();
  }
  if (e.ctrlKey && e.key === 'u') {
    e.preventDefault();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const gifContainer = document.querySelector(".gif-container img");

  const gifs = [
    { src: "assets/fondo.gif", duration: 3000 },
    { src: "assets/fondo1.gif", duration: 1500 },
    { src: "assets/fondo2.gif", duration: 1200 },
    { src: "assets/fondo4.gif", duration: 1100 }
  ];

  let index = 0;

  function changeGif() {
    gifContainer.src = gifs[index].src;
    setTimeout(() => {
      index = (index + 1) % gifs.length; 
      changeGif(); 
    }, gifs[index].duration);
  }

  changeGif(); 
});
