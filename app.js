/* =========================================================
   FORRIN · app.js
   Wiring de UI: navegación por pills (patrón tabs accesible),
   render de datos, chatbot y buscador de hospitales.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  renderFAQ();
  renderMetodos();
  renderITS();
  renderDerechos();
  renderHospitales();
  initChat();
  initFiltroHospitales();
});

/* ---------- Navegación por pills (patrón ARIA tabs) ---------- */
function initTabs() {
  const tabs = Array.from(document.querySelectorAll('[role="tab"]'));
  const panels = tabs.map(tab => document.getElementById(tab.getAttribute("aria-controls")));

  function activar(index) {
    tabs.forEach((tab, i) => {
      const activo = i === index;
      tab.setAttribute("aria-selected", activo ? "true" : "false");
      tab.tabIndex = activo ? 0 : -1;
      panels[i].hidden = !activo;
    });
    tabs[index].focus();
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t, i) => {
        t.setAttribute("aria-selected", i === index ? "true" : "false");
        t.tabIndex = i === index ? 0 : -1;
        panels[i].hidden = i !== index;
      });
    });

    tab.addEventListener("keydown", (e) => {
      let newIndex = null;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") newIndex = (index + 1) % tabs.length;
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") newIndex = (index - 1 + tabs.length) % tabs.length;
      if (e.key === "Home") newIndex = 0;
      if (e.key === "End") newIndex = tabs.length - 1;
      if (newIndex !== null) {
        e.preventDefault();
        activar(newIndex);
      }
    });
  });
}

/* ---------- Render: FAQ ---------- */
function renderFAQ() {
  const list = document.getElementById("faq-list");
  FAQ_DB.forEach(item => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = item.question;
    btn.addEventListener("click", () => {
      agregarMensaje("user", item.question);
      agregarMensaje("bot", item.answer);
    });
    li.appendChild(btn);
    list.appendChild(li);
  });
}

/* ---------- Render: Métodos ---------- */
function renderMetodos() {
  const grid = document.getElementById("metodos-grid");
  METODOS_DB.forEach(m => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <span class="tag">${m.tag}</span>
      <h3>${m.nombre}</h3>
      <p>${m.desc}</p>
    `;
    grid.appendChild(card);
  });
}

/* ---------- Render: ITS ---------- */
function renderITS() {
  const container = document.getElementById("its-content");
  const intro = document.createElement("p");
  intro.textContent = ITS_INFO.intro;
  container.appendChild(intro);

  ITS_INFO.bloques.forEach(b => {
    const div = document.createElement("div");
    div.className = "info-block";
    div.innerHTML = `<h3>${b.titulo}</h3><p>${b.texto}</p>`;
    container.appendChild(div);
  });
}

/* ---------- Render: Derechos ---------- */
function renderDerechos() {
  const container = document.getElementById("derechos-content");
  DERECHOS_INFO.forEach(d => {
    const div = document.createElement("div");
    div.className = "info-block";
    div.innerHTML = `<h3>${d.titulo}</h3><p>${d.texto}</p>`;
    container.appendChild(div);
  });
}

/* ---------- Render: Hospitales ---------- */
function renderHospitales(filtroProvincia = "todas") {
  const list = document.getElementById("hospitales-list");
  list.innerHTML = "";

  const datos = filtroProvincia === "todas"
    ? HOSPITALES_DB
    : HOSPITALES_DB.filter(h => h.provincia === filtroProvincia);

  if (datos.length === 0) {
    list.innerHTML = "<p>No hay resultados para ese filtro.</p>";
    return;
  }

  datos.forEach(h => {
    const li = document.createElement("li");
    li.className = "hospital-card";
    const mapsUrl = "https://www.google.com/maps/search/" + encodeURIComponent(`${h.nombre} ${h.direccion} ${h.provincia}`);
    li.innerHTML = `
      <h3>${h.nombre}</h3>
      <p>${h.direccion} — ${h.barrio}, ${h.provincia}</p>
      <p>📞 ${h.telefono}</p>
      <div class="services">${h.servicios.map(s => `<span>${s}</span>`).join("")}</div>
      <p><a href="${mapsUrl}" target="_blank" rel="noopener noreferrer">Ver cómo llegar ↗</a></p>
    `;
    list.appendChild(li);
  });
}

function initFiltroHospitales() {
  const select = document.getElementById("province-filter");
  const provincias = [...new Set(HOSPITALES_DB.map(h => h.provincia))];
  provincias.forEach(p => {
    const opt = document.createElement("option");
    opt.value = p;
    opt.textContent = p;
    select.appendChild(opt);
  });
  select.addEventListener("change", () => renderHospitales(select.value));
}

/* ---------- Chat ---------- */
function agregarMensaje(tipo, texto) {
  const chatWindow = document.getElementById("chat-window");
  const msg = document.createElement("div");
  msg.className = `msg ${tipo}`;
  msg.textContent = texto;
  chatWindow.appendChild(msg);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function initChat() {
  agregarMensaje("bot", "¡Hola! Soy Forrin. Preguntame lo que necesites saber sobre salud sexual, métodos anticonceptivos, ITS o tus derechos.");

  const form = document.getElementById("chat-form");
  const input = document.getElementById("chat-input");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const texto = input.value.trim();
    if (!texto) return;

    agregarMensaje("user", texto);

    const resultado = buscarRespuesta(texto);
    const respuesta = resultado ? resultado.answer : respuestaFallback();

    // pequeño delay para que se sienta conversacional
    setTimeout(() => agregarMensaje("bot", respuesta), 350);

    input.value = "";
    input.focus();
  });
}
