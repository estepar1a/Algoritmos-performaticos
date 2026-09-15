// Botón "Subir trabajo": por ahora es un placeholder.
// Cuando tengas el lugar donde vas a guardar los archivos (carpeta, Drive, backend, etc.)
// acá es donde conectás la lógica real de subida.
const uploadBtn = document.querySelector('.btn-upload');

if (uploadBtn) {
  uploadBtn.addEventListener('click', () => {
    alert('Acá vamos a conectar la subida de trabajos más adelante.');
  });
}

// Feedback simple al entrar a un taller: por si el archivo taller-N.html
// todavía no existe, avisamos en vez de romper la navegación.
const workshopCards = document.querySelectorAll('.workshop-card');

workshopCards.forEach((card) => {
  card.addEventListener('click', (event) => {
    const destino = card.getAttribute('href');
    // Si querés bloquear la navegación hasta tener las páginas reales, descomentá esto:
    // event.preventDefault();
    // alert(`Todavía falta crear ${destino}`);
  });
});
