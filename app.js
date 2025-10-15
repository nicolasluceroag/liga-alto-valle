function cargarTabla(categoria, btn) {
  document
    .querySelectorAll(".buttons button")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");

  localStorage.setItem("ultimaCategoria", categoria);

  const tablaBody = document.getElementById("tabla-body");
  tablaBody.innerHTML = "";

  posiciones[categoria].forEach((equipo) => {
    const tr = document.createElement("tr");
    let clasePos = "";
    if (equipo.pos === 1) clasePos = "gold";
    else if (equipo.pos === 2) clasePos = "silver";
    else if (equipo.pos === 3) clasePos = "bronze";

    tr.innerHTML = `
      <td class="pos ${clasePos}">${equipo.pos}</td>
      <td class="team"><img src="${equipo.escudo}" class="badge" /> ${equipo.equipo}</td>
      <td>${equipo.pj}</td>
      <td>${equipo.g}</td>
      <td>${equipo.p}</td>
    `;
    tablaBody.appendChild(tr);
  });

  cargarFechas(categoria);
}

function cargarFechas(categoria) {
  const fechasSelect = document.getElementById("fechas-select");
  fechasSelect.innerHTML = "";

  const fechas = Object.keys(resultados[categoria]);

  fechas.forEach((fecha) => {
    const option = document.createElement("option");
    option.value = fecha;
    option.textContent = fecha;
    fechasSelect.appendChild(option);
  });

  if (fechas.length > 0) {
    cargarPartidos(categoria, fechas[0]);
  } else {
    document.getElementById("partidos-container").innerHTML =
      "<p>No hay partidos disponibles.</p>";
  }
}

function cargarPartidos(categoria, fecha) {
  const partidosContainer = document.getElementById("partidos-container");
  partidosContainer.innerHTML = "";

  const partidos = resultados[categoria][fecha];

  partidos.forEach((partido) => {
    const partidoDiv = document.createElement("div");
    partidoDiv.classList.add("partido");

    const localJugadoresHTML = partido.local.jugadores
      .split(" / ")
      .map((nombre) => `<div>${nombre}</div>`)
      .join("");

    const visitanteJugadoresHTML = partido.visitante.jugadores
      .split(" / ")
      .map((nombre) => `<div>${nombre}</div>`)
      .join("");

    const resultadoHTML = partido.resultado
      .split(" / ")
      .map((set) => `<div>${set}</div>`)
      .join("");

    partidoDiv.innerHTML = `
      <div class="equipo-partido">
          <img src="${partido.local.escudo}" class="badge-partido" />
          <span class="nombre-equipo">${partido.local.nombre}</span>
          <div class="jugadores">${localJugadoresHTML}</div>
      </div>
      <div class="resultado">
          ${resultadoHTML}
      </div>
      <div class="equipo-partido">
          <img src="${partido.visitante.escudo}" class="badge-partido" />
          <span class="nombre-equipo">${partido.visitante.nombre}</span>
          <div class="jugadores">${visitanteJugadoresHTML}</div>
      </div>
    `;

    partidosContainer.appendChild(partidoDiv);
  });
}

window.onload = () => {
  const categoriaGuardada = localStorage.getItem("ultimaCategoria");

  if (categoriaGuardada) {
    const botonActivo = document.querySelector(
      `button[onclick="cargarTabla('${categoriaGuardada}', this)"]`
    );
    if (botonActivo) {
      cargarTabla(categoriaGuardada, botonActivo);
    }
  } else {
    const primerBoton = document.querySelector(".buttons button");
    if (primerBoton) {
      cargarTabla("2da", primerBoton);
    }
  }

  const fechasSelect = document.getElementById("fechas-select");
  fechasSelect.addEventListener("change", (e) => {
    const botonActivo = document.querySelector(".buttons button.active");
    if (botonActivo) {
      const categoria = botonActivo.getAttribute("onclick").match(/'(.*?)'/)[1];
      cargarPartidos(categoria, e.target.value);
    }
  });
};
