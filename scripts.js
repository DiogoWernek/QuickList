const form = document.querySelector("form");
const list = document.querySelector(".list-items");
const input = document.querySelector(".custom-input");

form.onsubmit = (event) => {
  event.preventDefault();
  
  const item = input.value; // Pega o valor do input
  if (item === '') return; // Verifica se o input está vazio

  // Cria os novos elementos
  const newUl = document.createElement("ul"); // Criando ul
  newUl.classList.add("flex"); // Adiciona a classe 'flex' ao 'ul'

  const newDiv = document.createElement("div"); // Criando div
  newDiv.classList.add("flex", "item"); // Adicionando a classe no div 

  const newInput = document.createElement("input"); // Criando input
  newInput.type = "checkbox"; // Adicionando o tipo Checkbox
  newInput.name = item; // Adicionando o nome com o mesmo nome do input
  newInput.id = item; // Adicionando o id com o mesmo nome do input

  const newLi = document.createElement("li"); // Criando li
  newLi.textContent = item; // Adicionando a variável Item ao content text da li

  // Adiciona o input e o li ao div
  newDiv.appendChild(newInput);
  newDiv.appendChild(newLi);

  // Adiciona o div ao ul
  newUl.appendChild(newDiv);

  // Cria o botão de remover
  const removeButton = document.createElement("a");
  removeButton.id = "item-remove";
  removeButton.innerHTML = '<i class="ph ph-trash"></i>';

  // Adiciona o botão de remover ao ul
  newUl.appendChild(removeButton);

  // Adiciona o novo ul à lista de itens
  list.appendChild(newUl);

  // Limpa o campo de input
  input.value = '';

  // Adiciona evento de remover
  removeButton.addEventListener("click", () => {
    list.removeChild(newUl);
  });
};
