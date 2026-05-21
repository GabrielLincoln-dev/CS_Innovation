document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.companies .imagens');
    
    // Verifica se o container do carrossel existe antes de tentar inicializá-lo
    if (!carouselContainer) {
        console.warn("Container do carrossel '.companies .imagens' não encontrado.");
        return;
    }

    const images = carouselContainer.querySelectorAll('.img-item');
    let currentIndex = 0;
    const intervalTime = 2000; // Tempo em milissegundos para a troca de imagem (2 segundos)

    function showImage(index) {
        images.forEach((imgItem, i) => {
            imgItem.style.display = (i === index) ? 'flex' : 'none';
            imgItem.classList.remove('animate-in', 'animate-out');
        });
    }

    function nextImage() {
        const prevIndex = currentIndex;
        currentIndex = (currentIndex + 1) % images.length;

        const prevItem = images[prevIndex];
        const nextItem = images[currentIndex];

        // Prepara os itens para a animação
        prevItem.classList.remove('animate-in');
        prevItem.classList.add('animate-out');

        nextItem.style.display = 'flex';
        nextItem.classList.remove('animate-out');
        nextItem.classList.add('animate-in');

        // Esconde o item anterior após o término da animação
        setTimeout(() => {
            if (prevItem !== nextItem) {
                prevItem.style.display = 'none';
            }
        }, 600); // Tempo equivalente ao do CSS (0.6s)
    }

    // Inicializa o carrossel se houver imagens
    if (images.length > 0) {
        showImage(currentIndex); // Exibe a primeira imagem
        setInterval(nextImage, intervalTime); // Inicia a transição automática
    }

    // --- Lógica de envio do formulário para o WhatsApp ---
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Impede o recarregamento da página

            // Captura dos valores dos campos
            const nome = document.getElementById('nome').value;
            const telefone = document.getElementById('telefone').value;
            const empresa = document.getElementById('empresa').value;
            const dor = document.getElementById('dor').value;

            // Configuração do número de destino (Brasil +55)
            const numeroDestino = "5511977067810";

            // Construção da mensagem de apresentação (Lead formatado)
            // Usamos encodeURIComponent para garantir que caracteres especiais e quebras de linha funcionem na URL
            const mensagem = `Olá CS Innovation! %0A%0A` +
                             `Gostaria de solicitar um diagnóstico estratégico.%0A%0A` +
                             `Dados do Contato:%0A` +
                             ` Nome: ${nome}%0A` +
                             ` Empresa: ${empresa}%0A` +
                             ` Telefone: ${telefone}%0A%0A` +
                             `Principal desafio relatado:*%0A` +
                             `> ${dor}`;

            // Montagem da URL final do WhatsApp
            const whatsappUrl = `https://wa.me/${numeroDestino}?text=${mensagem}`;

            // Abre o WhatsApp em uma nova aba
            window.open(whatsappUrl, '_blank');
        });
    }
});
