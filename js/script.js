//  window.onload = () => {
  const canvas = document.querySelector("canvas")
  const game = new Game(canvas)
// document.getElementById("start-button").onclick = () => {
//      console.log(document.getElementById("start-button"))
//      game.start();  
// }
 // }
 const start = document.querySelector("#start-button")
 window.addEventListener('load', () => {
     start.addEventListener('click', () => {
         game.start();
     });
 });

 


