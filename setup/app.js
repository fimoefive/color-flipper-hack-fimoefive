

const colors = ["red", "blue", "green", "purple", "yellow", "violet"];

const button = document.getElementById("btn-colorChange");

button.addEventListener('click', (event) => {
  document.querySelector('body').style.background = `${colors[Math.floor(Math.random() * colors.length)]}`;
  console.log("test color");
});

const container = document.querySelector('#btn-colorChange').innerHTML;
