const display = document.getElementById("display");
const pads = document.querySelectorAll(".drum-pad");

pads.forEach(pad => {
   pad.addEventListener("click", () =>{
     const audio = pad.querySelector("audio");
     audio.currentTime = 0;
     audio.play();
     display.innerText = pad.id;
     });
});

document.addEventListener("keydown", (event) => {
  const key = event.key.toUpperCase();
  const audio = document.getElementById(key); if (audio){
    audio.currentTime = 0;
    audio.play();
    display.innerText = audio.parentElement.id;}
});
