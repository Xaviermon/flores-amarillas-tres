// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Los sabios dicen", time: 15 },
  { text: "Que solo los tontos se precipitan", time: 18 },
  { text: "Pero no puedo evitar", time: 27 },
  { text: "Enamorarme de ti", time: 32 },
  { text: "Si me quedara", time: 33 },
  { text: "¿Sería un pecado?", time: 41 },
  { text: "Si no puedo evitar", time: 47 },
  { text: "Enamorarme de ti", time: 54 },
  { text: "Como un río que fluye", time: 59 },
  { text: "Seguro hacia el mar", time: 67 },
  { text: "Querida, así es", time: 72 },
  { text: "Algunas cosas están destinadas a suceder", time: 78 },
  { text: "Toma mi mano", time: 83 },
  { text: "Toma mi vida entera también", time: 91 },
  { text: "Porque no puedo evitar", time: 97 },
  { text: "Enamorarme de ti", time: 104 },
  { text: "Como un rio que fluye", time: 108 },
  { text: "Seguro hacia el mar", time: 144 },
  { text: "Querida, así es", time: 148 },
  { text: "Algunas cosas están destinadas a suceder", time: 153 },
  { text: "Toma mi mano", time: 158 },
  { text: "Toma mi vida entera también", time: 164 },
  { text: "Porque no puedo evitar", time: 169 },
  { text: "Enamorarme de ti", time: 176 },
  { text: "Porque no puedo evitar", time: 183 },
  { text: "Enamorarme de ti", time: 188 },
  { text: "Love.", time: 140 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);