/* =========================================================
   FORRIN · chatbot.js
   Motor simple de coincidencia de palabras clave (sin backend).
   ========================================================= */

function normalizar(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // saca acentos
    .replace(/[^\w\s]/g, " ")
    .trim();
}

function esSaludo(texto) {
  return /\b(hola|buenas|buen dia|buenas tardes|buenas noches|hey)\b/.test(texto);
}

function esAgradecimiento(texto) {
  return /\b(gracias|genial|perfecto|joya|buenisimo)\b/.test(texto);
}

/**
 * Busca en FAQ_DB la respuesta con mayor coincidencia de palabras clave.
 * Devuelve { answer, matchedId } o null si no hay coincidencias suficientes.
 */
function buscarRespuesta(mensajeUsuario) {
  const texto = normalizar(mensajeUsuario);

  if (esSaludo(texto)) {
    return {
      answer: "¡Hola! Soy Forrin 👋. Puedo ayudarte con dudas sobre métodos anticonceptivos, ITS, tus derechos o dónde hacerte un análisis. ¿Qué te gustaría saber?",
      matchedId: null
    };
  }
  if (esAgradecimiento(texto)) {
    return {
      answer: "¡De nada! Si te surge otra duda, acá estoy. Recordá que ante una consulta médica puntual siempre es mejor hablar con un profesional de salud.",
      matchedId: null
    };
  }

  let mejor = null;
  let mejorScore = 0;

  FAQ_DB.forEach(item => {
    let score = 0;
    item.keywords.forEach(kw => {
      if (texto.includes(normalizar(kw))) score += 1;
    });
    if (score > mejorScore) {
      mejorScore = score;
      mejor = item;
    }
  });

  if (mejor && mejorScore > 0) {
    return { answer: mejor.answer, matchedId: mejor.id };
  }

  return null;
}

const RESPUESTAS_FALLBACK = [
  "No tengo una respuesta puntual para eso todavía. Te recomiendo llamar a la Línea Salud Sexual 0800-222-3444 (gratis y confidencial) o mirar las preguntas frecuentes de abajo.",
  "Esa consulta me excede un poco. Un profesional de salud en tu centro de salud u hospital más cercano puede orientarte mejor. ¿Querés que te muestre el listado de hospitales?"
];

function respuestaFallback() {
  const i = Math.floor(Math.random() * RESPUESTAS_FALLBACK.length);
  return RESPUESTAS_FALLBACK[i];
}
