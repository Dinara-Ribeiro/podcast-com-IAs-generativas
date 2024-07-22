document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(contactForm);
        console.log('Nome:', formData.get('name'));
        console.log('Email:', formData.get('email'));
        console.log('Mensagem:', formData.get('message'));
        alert('Obrigado por entrar em contato!');
        contactForm.reset();
    });
});
