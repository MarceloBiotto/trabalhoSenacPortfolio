const btn = document.getElementById('button');



document.getElementById('formulario').addEventListener('submit', function(event) {
  event.preventDefault();

 
  const depoimento = document.getElementById('depoimento').value;

  if (!depoimento.trim() ) {
    alert('Por favor, preencha o campo depoimento antes de enviar.');
    return; 
  }

  btn.value = 'seending...';

  const serviceID = 'service_r4m5zvg';
  const templateID = 'template_1jsonvw';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'seending message';
      alert('Message submit!');

      document.getElementById('depoimento').value = '';
      document.getElementById('from_name').value = '';
      document.getElementById('from_email').value = '';
      document.getElementById('button').value = 'seending new message';  
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});