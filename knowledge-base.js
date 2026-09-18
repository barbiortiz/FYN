/* =========================================================
   FORRIN · knowledge-base.js
   Contenido reescrito y resumido (no copiado textualmente) a partir de:
   - argentina.gob.ar/salud/sexual/preguntas-frecuentes
   - argentina.gob.ar/salud/sexual/metodos-anticonceptivos
   - argentina.gob.ar/anac/sifilis-en-argentina-informacion-clave-para-prevenir-y-actuar-tiempo
   - Ley 26.150 (Educación Sexual Integral) — argentina.gob.ar/normativa/nacional/norma-121222/texto
   Verificar siempre información sensible con un profesional de salud.
   ========================================================= */

const FAQ_DB = [
  {
    id: "consulta",
    question: "¿Dónde puedo consultar sobre salud sexual?",
    keywords: ["consulta", "consultar", "donde", "asesoramiento", "informacion", "dudas"],
    answer: "Podés consultar gratis en cualquier centro de salud u hospital público, o llamar a la Línea Salud Sexual 0800-222-3444 (confidencial y gratuita). Cada provincia además tiene su propio programa de salud sexual."
  },
  {
    id: "metodos-acceso",
    question: "¿Cómo consigo métodos anticonceptivos gratis?",
    keywords: ["metodo", "anticonceptivo", "gratis", "gratuito", "conseguir", "acceso", "pastillas"],
    answer: "La Ley 25.673 garantiza el acceso gratuito a métodos anticonceptivos en hospitales y centros de salud públicos, y también deben entregarlos las obras sociales y prepagas. Las opciones incluyen preservativos, pastillas, inyectables, DIU, implante subdérmico, anticoncepción de emergencia y anticoncepción quirúrgica. El mejor método es el que vos elegís junto a un profesional."
  },
  {
    id: "preservativo",
    question: "¿Por qué se recomienda siempre el preservativo?",
    keywords: ["preservativo", "condon", "proteccion", "doble proteccion"],
    answer: "El preservativo es el único método que, además de prevenir el embarazo, protege de infecciones de transmisión sexual (ITS) y VIH. Por eso se recomienda la 'doble protección': preservativo + otro método, para sumar efectividad anticonceptiva y prevención de ITS."
  },
  {
    id: "quirurgica",
    question: "¿Cómo accedo a vasectomía o ligadura tubaria?",
    keywords: ["vasectomia", "ligadura", "quirurgica", "esterilizacion", "trompas"],
    answer: "Son métodos permanentes y de difícil reversión. Se accede en hospitales públicos, obras sociales y prepagas (Ley 26.130), siendo mayor de edad. Se requiere una consulta médica, recibir información sobre este y otros métodos, y dejar la decisión por escrito. No hace falta haber tenido hijos ni autorización de la pareja."
  },
  {
    id: "adolescentes",
    question: "¿Qué derechos tienen los adolescentes en salud sexual?",
    keywords: ["adolescente", "menor", "edad", "13 años", "16 años", "joven"],
    answer: "Menores de 13 años: derecho a ser escuchados, recibir información y acceder a anticonceptivos, con consentimiento asistido por un adulto. De 13 a 16 años: pueden elegir método anticonceptivo de forma autónoma, sin acompañamiento de un adulto. Desde los 16 años: capacidad plena para decidir sobre el cuidado del propio cuerpo, como una persona adulta."
  },
  {
    id: "ive-ile",
    question: "¿Cuándo se puede acceder a una interrupción del embarazo?",
    keywords: ["aborto", "interrupcion", "embarazo", "ive", "ile"],
    answer: "Desde 2021 rige la Ley 27.610: la Interrupción Voluntaria del Embarazo (IVE) se puede solicitar hasta la semana 14 inclusive. Después de esa semana, la Interrupción Legal del Embarazo (ILE) procede si el embarazo es producto de una violación o si está en riesgo la vida o la salud de la persona gestante. Para orientarte sobre dónde consultar, podés llamar al 0800-222-3444."
  },
  {
    id: "discapacidad",
    question: "¿Qué derechos sexuales tienen las personas con discapacidad?",
    keywords: ["discapacidad", "derechos"],
    answer: "Los mismos derechos sexuales y reproductivos que cualquier persona. La idea de que las personas con discapacidad 'no tienen sexualidad' o no pueden decidir sobre su cuerpo es falsa y discriminatoria."
  },
  {
    id: "sifilis-que-es",
    question: "¿Qué es la sífilis?",
    keywords: ["sifilis", "its", "infeccion de transmision sexual"],
    answer: "Es una infección de transmisión sexual causada por una bacteria (Treponema pallidum). Si no se trata a tiempo puede avanzar y afectar piel, corazón y sistema nervioso. En Argentina los casos vienen en aumento marcado en los últimos años, por eso el testeo regular es tan importante."
  },
  {
    id: "sifilis-sintomas",
    question: "¿Qué síntomas tiene la sífilis?",
    keywords: ["sintomas", "chancro", "llaga", "erupcion", "sifilis sintomas"],
    answer: "Puede no dar síntomas visibles. En la fase primaria aparece una úlcera indolora (chancro) que cicatriza sola, aunque la infección sigue. En la fase secundaria puede haber erupción en piel (típica en palmas y plantas), fiebre y ganglios inflamados: es la etapa de mayor contagio. También existe una fase latente sin síntomas."
  },
  {
    id: "sifilis-prevencion",
    question: "¿Cómo me hago un test de sífilis o VIH?",
    keywords: ["prevenir", "prevencion", "testeo", "test", "hacerme un test"],
    answer: "Se recomienda testearte aunque no tengas síntomas, especialmente si tuviste una pareja nueva, relaciones sin preservativo o tu pareja tuvo alguna ITS. Hay tests rápidos con resultado en menos de 30 minutos, disponibles gratis en hospitales públicos y centros de salud. Mirá la sección 'Hospitales públicos' de esta app para encontrar uno cerca."
  },
  {
    id: "sifilis-tratamiento",
    question: "¿La sífilis tiene cura?",
    keywords: ["tratamiento", "cura", "penicilina", "se cura"],
    answer: "Sí, la sífilis se cura. El tratamiento estándar es con penicilina benzatínica, indicada por un profesional de salud. Si tuviste un resultado positivo, tu pareja o parejas sexuales también deben evaluarse y tratarse para cortar la cadena de contagio."
  },
  {
    id: "esi",
    question: "¿Qué es la Educación Sexual Integral (ESI)?",
    keywords: ["esi", "educacion sexual", "escuela", "ley 26150"],
    answer: "La Ley 26.150 establece que todos los estudiantes, en escuelas públicas y privadas de todo el país, tienen derecho a recibir Educación Sexual Integral: contenidos biológicos, psicológicos, sociales, afectivos y éticos, con información confiable y actualizada, desde el nivel inicial hasta la formación docente."
  },
  {
    id: "violencia",
    question: "Sufrí una situación de abuso o violencia, ¿qué hago?",
    keywords: ["abuso", "violacion", "violencia", "obligaron", "forzaron", "no consenti"],
    answer: "Lo que te pasó no es tu responsabilidad y no tenés que atravesarlo sola/o. Podés llamar a la Línea 144 (atención a víctimas de violencia de género, las 24 horas) o acercarte a la guardia de cualquier hospital público. Si el hecho fue reciente, un hospital también puede orientarte sobre anticoncepción de emergencia y, si corresponde, sobre la Interrupción Legal del Embarazo (Ley 27.610)."
  }
];

const METODOS_DB = [
  { nombre: "Preservativo", tag: "Único que previene ITS", desc: "Método de barrera. Se usa desde el inicio hasta el final de la relación (vaginal, anal u oral). Revisá vencimiento y usá lubricante a base de agua." },
  { nombre: "Pastillas combinadas", tag: "Hormonal diario", desc: "Combinan dos hormonas. Se toman una vez por día; requieren regularidad para ser efectivas." },
  { nombre: "Pastillas de una sola hormona", tag: "Hormonal diario", desc: "Conocida como minipíldora. Alternativa para personas que no pueden tomar estrógeno, por ejemplo durante la lactancia." },
  { nombre: "Inyectables", tag: "Mensual o trimestral", desc: "Aplicación hormonal cada 1 o cada 3 meses, según el tipo, en un centro de salud." },
  { nombre: "DIU", tag: "Larga duración", desc: "Dispositivo intrauterino colocado por un profesional de salud. Protege por varios años y es reversible." },
  { nombre: "Implante subdérmico", tag: "Larga duración", desc: "Varilla pequeña que se coloca bajo la piel del brazo. Libera hormonas de forma gradual durante varios años." },
  { nombre: "Anticoncepción hormonal de emergencia (AHE)", tag: "Uso ocasional", desc: "Se usa después de una relación sin protección o ante una falla del método habitual. Cuanto antes se tome, más efectiva es. No reemplaza un método regular." },
  { nombre: "Ligadura tubaria", tag: "Método permanente", desc: "Cirugía que impide el paso de óvulos al útero. Es de difícil reversión; se accede siendo mayor de edad (Ley 26.130)." },
  { nombre: "Vasectomía", tag: "Método permanente", desc: "Cirugía que corta o liga los conductos deferentes. Es de difícil reversión; se accede siendo mayor de edad (Ley 26.130)." }
];

const ITS_INFO = {
  intro: "Las infecciones de transmisión sexual (ITS) se contagian principalmente por contacto sexual sin preservativo. Muchas, como la sífilis, pueden no dar síntomas visibles durante un tiempo, por eso el testeo regular es clave.",
  bloques: [
    {
      titulo: "Sífilis: en aumento en Argentina",
      texto: "En 2025 se confirmaron 55.183 diagnósticos de sífilis en el país, la cifra más alta de los últimos 5 años (+71% respecto del período 2020-2024). También crecieron los casos en personas embarazadas y la sífilis congénita en bebés, por eso el control prenatal con testeo es obligatorio en el primer y el tercer trimestre."
    },
    {
      titulo: "Cómo se contagia",
      texto: "Por contacto directo con lesiones (a veces invisibles) en relaciones vaginales, anales u orales sin preservativo. También puede transmitirse de madre a bebé durante el embarazo o el parto si no hubo tratamiento. El período de incubación va de 10 a 90 días."
    },
    {
      titulo: "Síntomas posibles",
      texto: "Fase primaria: una úlcera indolora (chancro) que cicatriza sola aunque la infección continúa. Fase secundaria: erupción en piel (palmas y plantas), fiebre, ganglios inflamados — la etapa de mayor contagio. Fase latente: sin síntomas visibles, con riesgo de complicaciones si no se trata."
    },
    {
      titulo: "Prevención y testeo",
      texto: "Usar preservativo en toda relación sexual, revisar su vencimiento y usar lubricante a base de agua. Testearte regularmente, en especial ante parejas nuevas o relaciones sin protección: hay test rápidos con resultado en menos de 30 minutos, gratuitos en hospitales públicos."
    },
    {
      titulo: "Tratamiento",
      texto: "La sífilis se cura con penicilina benzatínica indicada por un profesional. Si el resultado es positivo, la pareja o parejas sexuales también deben evaluarse y tratarse para cortar la cadena de transmisión."
    }
  ]
};

const DERECHOS_INFO = [
  {
    titulo: "Ley 25.673 — Salud Sexual y Procreación Responsable",
    texto: "Garantiza el acceso gratuito a métodos anticonceptivos en hospitales públicos, centros de salud, obras sociales y prepagas, dentro del Plan Médico Obligatorio."
  },
  {
    titulo: "Ley 26.130 — Anticoncepción Quirúrgica",
    texto: "Habilita el acceso a la ligadura tubaria y la vasectomía a partir de la mayoría de edad, de forma autónoma y sin necesidad de autorización de terceros; solo se requiere dejar la decisión por escrito tras recibir información completa."
  },
  {
    titulo: "Ley 26.150 — Educación Sexual Integral (ESI)",
    texto: "Establece que todos los estudiantes, en escuelas públicas y privadas de todo el país, tienen derecho a recibir educación sexual integral con contenidos biológicos, psicológicos, sociales, afectivos y éticos."
  },
  {
    titulo: "Ley 27.610 — Acceso a la Interrupción del Embarazo",
    texto: "Regula la Interrupción Voluntaria del Embarazo (IVE) hasta las 14 semanas inclusive, y la Interrupción Legal del Embarazo (ILE) sin límite de semanas en casos de violación o riesgo para la vida o la salud de la persona gestante."
  },
  {
    titulo: "Derechos según la edad",
    texto: "Menores de 13 años: derecho a ser escuchados e informados, con consentimiento asistido. De 13 a 16 años: eligen su método anticonceptivo de forma autónoma. Desde los 16 años: capacidad plena para decidir sobre el propio cuerpo."
  }
];

/* Directorio curado de hospitales públicos (muestra representativa, no exhaustiva).
   Datos de contacto verificados en las webs oficiales de cada hospital / listado del GCBA.
   Recomendación: confirmar horarios telefónicamente antes de ir. */
const HOSPITALES_DB = [
  {
    nombre: "Hospital de Infecciosas Francisco J. Muñiz",
    provincia: "CABA",
    barrio: "Parque Patricios",
    direccion: "Uspallata 2272",
    telefono: "011 4360-5700",
    servicios: ["Infectología de referencia", "Test VIH/ITS", "Consejería salud sexual"]
  },
  {
    nombre: "Hospital General de Agudos Juan A. Fernández",
    provincia: "CABA",
    barrio: "Palermo",
    direccion: "Av. Cerviño 3356",
    telefono: "011 4808-2600",
    servicios: ["Consultorios externos", "Salud sexual y reproductiva"]
  },
  {
    nombre: "Hospital General de Agudos Bernardino Rivadavia",
    provincia: "CABA",
    barrio: "Recoleta",
    direccion: "Av. Las Heras 2670",
    telefono: "011 4809-2000",
    servicios: ["Consultorios externos", "Guardia 24 hs"]
  },
  {
    nombre: "Hospital General de Agudos Cosme Argerich",
    provincia: "CABA",
    barrio: "La Boca",
    direccion: "Pi y Margall 750",
    telefono: "011 4121-0833",
    servicios: ["Test rápido VIH", "Test rápido sífilis", "Servicio de Infectología"]
  },
  {
    nombre: "Hospital General de Agudos Teodoro Álvarez",
    provincia: "CABA",
    barrio: "Flores",
    direccion: "Aranguren 2701",
    telefono: "011 4630-2900",
    servicios: ["Test rápido VIH", "Test rápido sífilis", "Servicio de Infectología"]
  },
  {
    nombre: "Hospital General de Agudos Carlos G. Durand",
    provincia: "CABA",
    barrio: "Caballito",
    direccion: "Av. Díaz Vélez 5044",
    telefono: "011 4982-5555",
    servicios: ["Test rápido VIH", "Test rápido sífilis", "Infectología y Salud Mental"]
  },
  {
    nombre: "Hospital General de Agudos José M. Ramos Mejía",
    provincia: "CABA",
    barrio: "Balvanera",
    direccion: "Urquiza 609",
    telefono: "WhatsApp 11 3386-8530",
    servicios: ["Clínica de Salud Sexual", "Test rápido VIH", "Test rápido sífilis"]
  },
  {
    nombre: "Hospital General de Agudos José A. Penna",
    provincia: "CABA",
    barrio: "Barracas",
    direccion: "Almafuerte 408",
    telefono: "011 4911-3030",
    servicios: ["Test rápido VIH", "Test rápido sífilis", "Servicio de Infectología"]
  },
  {
    nombre: "Hospital General de Agudos Enrique Tornú",
    provincia: "CABA",
    barrio: "Parque Chas",
    direccion: "Av. Combatientes de Malvinas 3002",
    telefono: "011 4521-8700",
    servicios: ["Test rápido VIH", "Test rápido sífilis"]
  },
  {
    nombre: "Hospital Nacional Prof. Alejandro Posadas",
    provincia: "Buenos Aires (Provincia)",
    barrio: "El Palomar, Morón",
    direccion: "Av. Pte. Illia y Marconi s/n",
    telefono: "011 4469-9200",
    servicios: ["Hospital de referencia nacional", "Consultorios de infectología"]
  },
  {
    nombre: "Hospital Provincial del Centenario",
    provincia: "Santa Fe",
    barrio: "Rosario",
    direccion: "Urquiza 3101",
    telefono: "0341 4724643",
    servicios: ["Consultorio de VIH (lun. a vie. 8 a 12 hs)", "Consejería salud sexual"]
  }
];
