const data = {
  "4ta": [
    {
      pos: 1,
      equipo: "Asociación Española de Neuquén",
      pj: 6,
      g: 4,
      p: 2,
      escudo: "escudos/AEN.png",
    },
    {
      pos: 1,
      equipo: "Club Cipolletti",
      pj: 6,
      g: 4,
      p: 2,
      escudo: "escudos/CAC.png",
    },

    {
      pos: 1,
      equipo: "Club Atlético Regina",
      pj: 6,
      g: 4,
      p: 2,
      escudo: "escudos/CAR.png",
    },

    {
      pos: 4,
      equipo: "Club Pelota Paleta Plottier",
      pj: 6,
      g: 3,
      p: 3,
      escudo: "escudos/PPP.png",
    },
    {
      pos: 5,
      equipo: "Club Atlético Cinco Saltos",
      pj: 6,
      g: 2,
      p: 4,
      escudo: "escudos/CACS.png",
    },

    {
      pos: 6,
      equipo: "Club Unión Alem Progresista",
      pj: 6,
      g: 1,
      p: 5,
      escudo: "escudos/CUAP.png",
    },
  ],
  "3ra": [
    {
      pos: 1,
      equipo: "Club Unión Alem Progresista",
      pj: 6,
      g: 6,
      p: 0,
      escudo: "escudos/CUAP.png",
    },
    {
      pos: 2,
      equipo: "Club Pelota Paleta Plottier",
      pj: 6,
      g: 4,
      p: 2,
      escudo: "escudos/PPP.png",
    },
    {
      pos: 3,
      equipo: "Club Atlético Cinco Saltos",
      pj: 6,
      g: 3,
      p: 3,
      escudo: "escudos/CACS.png",
    },
    {
      pos: 3,
      equipo: "Asociación Española de Neuquén",
      pj: 6,
      g: 3,
      p: 3,
      escudo: "escudos/AEN.png",
    },
    {
      pos: 5,
      equipo: "Club Cipolletti",
      pj: 6,
      g: 1,
      p: 5,
      escudo: "escudos/CAC.png",
    },
    {
      pos: 5,
      equipo: "Club Atlético Regina",
      pj: 6,
      g: 1,
      p: 5,
      escudo: "escudos/CAR.png",
    },
  ],
  "2da": [
    {
      pos: 1,
      equipo: "Club Unión Alem Progresista",
      pj: 6,
      g: 5,
      p: 1,
      escudo: "escudos/CUAP.png",
    },
    {
      pos: 1,
      equipo: "Club Atlético Cinco Saltos",
      pj: 6,
      g: 5,
      p: 1,
      escudo: "escudos/CACS.png",
    },
    {
      pos: 3,
      equipo: "Club Pelota Paleta Plottier",
      pj: 6,
      g: 3,
      p: 3,
      escudo: "escudos/PPP.png",
    },
    {
      pos: 3,
      equipo: "Club Cipolletti",
      pj: 6,
      g: 3,
      p: 3,
      escudo: "escudos/CAC.png",
    },
    {
      pos: 5,
      equipo: "Asociación Española de Neuquén",
      pj: 6,
      g: 2,
      p: 4,
      escudo: "escudos/AEN.png",
    },
    {
      pos: 6,
      equipo: "Club Atlético Regina",
      pj: 6,
      g: 0,
      p: 6,
      escudo: "escudos/CAR.png",
    },
  ],
};

function cargarTabla(categoria, btn) {
  // Activar botón
  document
    .querySelectorAll(".buttons button")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");

  const tablaBody = document.getElementById("tabla-body");
  tablaBody.innerHTML = "";

  data[categoria].forEach((equipo) => {
    const tr = document.createElement("tr");

    // Asignar clase según la posición
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
}

// Cargar por defecto la 2da al inicio
window.onload = () => {
  const primerBoton = document.querySelector(".buttons button");
  cargarTabla("2da", primerBoton);
};
