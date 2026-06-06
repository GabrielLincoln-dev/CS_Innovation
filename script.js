/* --- LÓGICA DE COOKIES (LGPD) --- */
document.getElementById('acceptCookies')?.addEventListener('click', () => {
    const banner = document.getElementById('cookieBanner');
    if (banner) {
        banner.style.display = 'none';
    }
});


/* --- FORMULÁRIO WHATSAPP --- */
document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const empresa = document.getElementById('empresa').value;
    const dor = document.getElementById('dor').value;
    
    const mensagem = `Olá! Gostaria de uma análise estratégica:

*Nome:* ${nome}
*Telefone:* ${telefone}
*Email:* ${email}
*Empresa:* ${empresa}
*Principal dor:* ${dor}`;
    
    const msgEncoded = encodeURIComponent(mensagem);
    const whatsappUrl = `https://wa.me/5511958774637?text=${msgEncoded}`;
    
    window.open(whatsappUrl, '_blank');
});