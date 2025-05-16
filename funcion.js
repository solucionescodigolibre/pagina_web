function enviarWhatsapp(curso) {
  const numeroWhatsApp = '5641204399';
  const mensaje = encodeURIComponent(`Hola, quiero pedir información sobre el ${curso}.`);
  const url = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
  window.open(url, '_blank');
}

document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});
