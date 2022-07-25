// MESSAGES

const horoscopo = {
  prediccion: [
    "No seas tan despistado, anota el plan de los próximos días en tu agenda. Así será difícil que te olvides de algo importante.",
    "Hoy podría ser un día complicado en el terreno social y familiar. Evita asistir a video conferencias en donde sepas que habrá personas con las que no encajas.",
    "Deberás rechazar la posibilidad de agregar más trabajo y responsabilidades a tu haber al verte completamente saturado.",
    "Establece objetivos, para que no queden sólo en buenos propósitos. Pon un recordatorio para no olvidar lo que quieres conseguir.",
    "No desesperes, tus logros serán más reales y duraderos. Persevera a pesar de las demoras y no te des por vencido antes de tiempo.",
    "Ten cuidado, los planetas se alinearon y no traen energía positiva. No te preocupes, todo dependerá de las decisiones que tomes.",
    "Deberás explicar cuáles son tus objetivos para así alcanzar lo que tanto deseas, y así recibirás ayuda de tu entorno.",
    "Presta atención a tu trabajo, puede ser que estés cometiendo errores, los cuales te traerán grandes inconvenientes para revertir.",
    "Tu agudeza e ingenio convertirán los ratos de tu tiempo libre en verdadera y pura diversión. Alguien especial te acompañará.",
    "Los demás no estarán dispuestos a cooperar contigo y deberás controlar tu fuerte carácter si quieres que las cosas salgan bien.",
    "Si ves que las cosas no te salen como quieres replantea la forma de pensar que posees y saldrás beneficiado.",
    "Buenas noticias que vienen de alguien cercano harán que te replantees ciertas cosas que te abruman. Podrás solucionarlas.",
  ],
  amor: [
    "Busca estabilidad emocional. Este será un buen período para definir el rumbo de tu vida afectiva y alejar fantasmas del pasado.",
    "Puedes estar más celoso e hipersensible, provocando algunas fricciones con tu pareja. Mantén la calma, busca el diálogo.",
    "El amor puede tomar una cualidad más espiritual. Te interesará ayudar a personas necesitadas y abrir tu corazón a la compasión.",
    "Creerás que el destino juega en tu contra cuando descubras que esa persona que te gusta ya encontró el amor. No te decepciones.",
    "Vive el presente sin ataduras y recuerdos. Es un período propicio para desprenderte sentimentalmente de lo que te lastima.",
    "Si estás en una situación afectiva difícil, toma la decisión de hacer cambios radicales en tu vida, y no que otros te influyan.",
    "Si sientes que la relación va en decadencia trata de salirte de tu rutina y hacer algo inesperado y que nunca pensaste.",
    "La situación de la pareja se encuentra en un momento de tensión. Es recomendable tomar un tiempo para aclarar las ideas.",
    "Si estás solo, sentirás deseos de divertirte, de conocer gente diversa y de establecer relaciones poco comprometidas.",
    "Si esperas resolver esa diferencia con tu pareja, no deberás escaparle. Enfréntala, al final verás que nada era tan complicado.",
    "El egoísmo en exceso podría dañar tu actual relación. Trata de pensar más en ambos y no solamente en tu bienestar.",
    "Si estás en desacuerdo con tu pareja sobre algunos temas, debes tener más cuidado al plantear tu postura. Mide mejor las palabras que usas.",
  ],
  riqueza: [
    "En lo económico, pagarás el precio de decisiones tomadas a la ligera. Aprende de esta lección para no repetir tu error.",
    "Se darán las condiciones necesarias para que lleves a cabo viejos proyectos. El factor suerte se encontrará de tu lado.",
    "Tienes la suerte contar con colegas honestos el ámbito de las finanzas. No los descuides porque escasean.",
    "Es una buena época para concretar todos los proyectos que tenías en mente. Concentra todas tus fuerzas en la realización.",
    "La batalla será dura, pero con seguridad lograrás avanzar hacia tus objetivos económicos. Ten paciencia, se te dará todo.",
    "Período importante respecto a tus recursos económicos. Vas a tener que volver a negociar ese trato que creías cerrado.",
    "Es un momento en que no hay estabilidad en el trabajo, es por esto que debes ser un poco más responsable.",
    "Momento inoportuno para realizar cualquier actividad financiera fuera de lo previsto. Sujétate a la rutina.",
    "La clave para alcanzar el éxito esta en mantenerse en continuo estado de cambio. Evita estancarte mentalmente.",
    "Empezarás a ver cómo el esfuerzo de noches sin dormir empieza a dar frutos. Esto te dará motivación para seguir adelante.",
    "Si las cosas no te salen como quieres no hay más vueltas que darle. No estás pasando por un buen momento en tus finanzas.",
    "Trata de aportar un sentido más práctico a tu trabajo. Esto te será más útil para lograr el éxito material que tanto ansías.",
  ],
  bienestar: [
    "Nada de equivocarte dos veces en lo mismo, tu mejor capital es la experiencia. Piensa muy bien tus acciones, pueden ser decisivas en tu vida.",
    "No le haces demasiado caso a tu salud y no estás cuidando demasiado tu imagen. Piensa si quieres seguir así.",
    "Desconfía de tu aparente buen estado de salud física y mental. Los cambios de temperatura pueden ser peligrosos en estos días.",
    "Dedícate a terminar todas aquellas actividades que tienes pendientes. No dejes para mañana lo que puedes hacer hoy.",
    "Un poco de actividad física, si eres de las personas sedentarias, no sólo no te vendría mal, sino que es imprescindible. Comienza ya.",
    "Solamente necesitas tener ojos muy atentos a la realidad para detectar dónde están las oportunidades y no dejarlas pasar. Mantente alerta.",
    "No es una buena época para que te dejes superar por esos problemas y malentendidos. Relájate y tómate un momento para pensar las cosas con calma.",
    "Trata de calmar o dominar tu temperamento puede que no sea un buen momento para entrar en discusiones que no llevan a nada.",
    "Aprovecha oportunidades para divertirte y relajarte. Dedica el tiempo que sea necesario para divertirte y pasarla bien.",
    "Si deseas vivir plenamente tu vida, debes abrirte a los afectos y dejarte querer. Pero ten en cuenta que sufrir también es parte de la vida.",
    "Si te sientes sin ganas trata de distraerte y realiza actividades que te saquen de la rutina. Las charlas con amigos o colegas nunca están de más.",
    "Ten en cuenta que si realizas actividades es conveniente que utilices el calzado y ropa adecuada, así evitarás posibles lesiones.",
  ],
};

// VARIABLES
const horoscopos = document.querySelector(".horoscopo");
const signoZodiacal = document.querySelector(".signo");
console.log(signoZodiacal);

// LISTENERS
signoZodiacal.onchange = crearHoroscopo;
window.onload = horoscopos.style.display = "none";

// FUNCTIONS

// Crear y añadir los párrafos correspondientes
function crearHoroscopo() {
  reiniciarHoroscopo(horoscopos);
  if (signoZodiacal.value !== "") {
    horoscopos.style.display = "";

    let elSignoZodiacal = document.createElement("h3");
    elSignoZodiacal.textContent = signoZodiacal.value;
    horoscopos.appendChild(elSignoZodiacal);

    let laPrediccion = document.createElement("p");
    laPrediccion.innerHTML =
      "<span>Horóscopo de hoy: </span>" +
      horoscopo.prediccion[
        Math.floor(Math.random() * horoscopo.prediccion.length)
      ];
    horoscopos.appendChild(laPrediccion);

    let elAmor = document.createElement("p");
    elAmor.innerHTML =
      "<span>Amor: </span>" +
      horoscopo.amor[Math.floor(Math.random() * horoscopo.amor.length)];
    horoscopos.appendChild(elAmor);

    let laRiqueza = document.createElement("p");
    laRiqueza.innerHTML =
      "<span>Riqueza: </span>" +
      horoscopo.riqueza[Math.floor(Math.random() * horoscopo.riqueza.length)];
    horoscopos.appendChild(laRiqueza);

    let elBienestar = document.createElement("p");
    elBienestar.innerHTML =
      "<span>Bienestar: </span>" +
      horoscopo.bienestar[
        Math.floor(Math.random() * horoscopo.bienestar.length)
      ];
    horoscopos.appendChild(elBienestar);
  } else {
    horoscopos.style.display = "none";
  }
}

// Quitar todos los hijos del div
function reiniciarHoroscopo(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
