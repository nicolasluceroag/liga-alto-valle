let data;

fetch("data.json")
  .then((response) => response.json())
  .then((json) => {
    data = json;
    // Carga la tabla inicial y activa el primer botón
    const primerBoton = document.querySelector(".buttons button");
    cargarTabla("2da", primerBoton);
  })
  .catch((error) => console.error("Error cargando JSON:", error));

function cargarTabla(categoria, activeButton) {
  const tbody = document.getElementById("tabla-body");
  tbody.innerHTML = "";

  // 1. Elimina la clase 'active' de todos los botones
  const allButtons = document.querySelectorAll(".buttons button");
  allButtons.forEach((button) => {
    button.classList.remove("active");
  });

  // 2. Agrega la clase 'active' al botón que fue presionado
  if (activeButton) {
    activeButton.classList.add("active");
  }

  // 3. Carga los datos de la tabla
  data[categoria].forEach((equipo) => {
    const row = `
      <tr>
        <td class="pos">${equipo.pos}</td>
        <td class="team">
          <img src="${equipo.escudo}" alt="escudo ${equipo.equipo}" class="badge" />
          ${equipo.equipo}
        </td>
        <td>${equipo.pj}</td>
        <td>${equipo.g}</td>
        <td>${equipo.p}</td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
}
