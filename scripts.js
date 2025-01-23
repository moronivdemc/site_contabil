//Validação simples para o formulário
const form = document.querySelector('form');

form.addEventListener('submit', (event) {
    event.preventDefault(); //Impedir o envio de formulário para teste

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !email || !mensagem) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }

    alert('Formulário enviado com sucesso!');
    form.reset(); // Reseta o formulário após envio
})

// Função para validar o formato do e-mail
function validateEmail(email) {
    const regex = /^[\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

//Rolagem suave ao clicar nos links do Menu
const links = document.querySelectorAll('nav a');

links.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth',
            });
        }
    });
});
