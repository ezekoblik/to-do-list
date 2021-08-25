const input = document.getElementById("input");
const button = document.getElementById("btn");
const box = document.getElementById("aviso");
const list = document.getElementById("list");

button.addEventListener("click", (e) => {
  e.preventDefault();

  const tarea = input.value;

  if (tarea !== "") {
    const point = document.createElement("li");
    const text = document.createElement("p");
    text.textContent = tarea;
    
    point.appendChild(text);
    point.appendChild(deleteBtn());
    list.appendChild(point);

    input.value = "";

    box.style.display = "none";
  }
});

const deleteBtn = () => {

  const borrar = document.createElement("button");
  borrar.textContent = "x";

  borrar.className = "borrar-btn";

  borrar.addEventListener("click", (e) => {
    const btnChau = e.target.parentElement;
    list.removeChild(btnChau);

    const items = document.querySelectorAll("li");

    if (items.lenght === 0) {
      box.style.display = "block";
    }
  });
  return borrar;
};
