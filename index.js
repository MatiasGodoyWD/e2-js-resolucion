const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

/*Traemos los elementos del dom necesarios para realizar el ejercicio*/

const resultContainer = document.getElementById("result-container");
const form = document.getElementById("form");
const input = document.querySelector(".form__input");

/* Buscamos en el array de pizzas una pizza cuyo id coincida con el numero del input. Retornará undefined si no existe dicho número */
const searchPizza = (value) => pizzas.find((pizza) => pizza.id === value);

/* Función para mostrar un error en caso de que no hayamos colocado nada en el input y activemos el evento submit */
const showEmptyError = () => {
  resultContainer.innerHTML = `
    <div class="pizza-container">
    <i class="fa-solid fa-triangle-exclamation error"></i>
    <h2 class="error-title"> Por favor, ingrese un número para que podamos buscar su pizza en el menú. </h2>
    </div>`;
};

/* Función para renderizar el resultado de la busqueda. Lo que se renderice dependerá de si se encontro una pizza con el id dado o no. */
const renderResult = (pizza) => {
  if (!pizza) {
    resultContainer.innerHTML = `
    <div class="pizza-container">
    <i class="fa-solid fa-triangle-exclamation error"></i>
    <h2 class="error-title"> No existe una pizza con el id ingresado. </h2>
    <p>Realice una nueva busqueda.</p>
    </div>`;
  } else {
    resultContainer.innerHTML = `
    <div class="pizza-container">
    <img class="pizza" src="./pizza.png"/>
      <h2 class="result-title">${pizza.nombre.toUpperCase()}</h2>
     <h3 class="result-price"> Precio: $${pizza.precio} 🍕</h3>
     <p>Busca otro número de pizza para ver si la tenemos.</p>
     </div>
    `;
  }
};

/* Función que se ejecutará al darse el evento "submit". 
1- Guardamos el valor del input en una variable.
2- Si el valor es undefined (debido a lo que devuelve el método find), mostramos un error.
3- Si el valor no es undefined, guardamos la pizza encontrada.
*/

const submitSearch = (e) => {
  e.preventDefault();
  const searchedValue = input.value;
  if (!searchedValue) {
    showEmptyError(searchedValue);
    return;
  }
  const searchedPizza = searchPizza(Number(searchedValue));
  renderResult(searchedPizza);
};

/* Función inicializadora */
const init = () => {
  form.addEventListener("submit", submitSearch);
};

init();
