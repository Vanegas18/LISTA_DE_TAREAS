let list = [];

//--------------------GET--------------------
fetch("/list")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    list = data;
    mostrarList(list);
  })
  .catch((error) => {
    console.error("There has been a problem with your fetch operation:", error);
  });

function mostrarList(listas) {
  const ul = document.getElementById("ul__div3");
  ul.innerHTML = "";

  listas.forEach((list) => {
    const li = document.createElement("li");
    li.className = "li__div3";

    li.innerHTML = `
      <input type="checkbox" class="checkbox__div3">
      <p class="p__div3">${list.text}</p> 
      <button class="buttonEdit__div3" onclick="editarTarea('${list._id}')">Editar</button>
      <button class="buttonDelete__div3" onclick="eliminarTarea('${list._id}')">Eliminar</button>
    `;
    ul.appendChild(li);
  });
}
//-------------------------------------------

//--------------------POST-------------------
const form = document.getElementById("form__div2");
if (form) {
  form.addEventListener("submit", nuevaTarea);
}

function nuevaTarea(event) {
  event.preventDefault();

  const text = document.getElementById("input__div2").value;
  const newWork = {
    text: text,
  };

  fetch("/list", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newWork),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      list.push(data);
      mostrarList(list);
      document.getElementById("input__div2").value = "";
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
}
//-------------------------------------------

//--------------------DELETE--------------------
function eliminarTarea(id) {
  fetch(`/list/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      list = list.filter((list) => list._id !== id);
      mostrarList(list);
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
}
//----------------------------------------------

//--------------------PUT------------------------
function editarTarea(id) {
  const text = prompt("Introduce el nuevo texto");
  const newWork = {
    text: text,
  };

  fetch(`/list/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newWork),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      list = list.map((list) => {
        if (list._id === id) {
          list.text = text;
        }
        return list;
      });
      mostrarList(list);
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
}
//---------------------------------------------