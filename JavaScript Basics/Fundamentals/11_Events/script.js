//Metodo 2 Funcion flecha
const btn2 = document.querySelector("#btn2");
btn2.onclick = () => alert("Hello world");

//Metodo 3
const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", () => {
  alert("Hello World");
});

//Metodo E
const btnE = document.querySelector("#btne");
btnE.addEventListener("click",function(e){
  console.log(e);
  console.log(e.target);
  e.target.style.background = "blue";
});

//Botones en lista de nodos
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {

  button.addEventListener('click',()=>{
    alert(button.id);
  });

});
