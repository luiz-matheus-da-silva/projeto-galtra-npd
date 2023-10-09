
    // Função para iniciar o efeito de digitação contínua
    function startTypingAnimation() {
        const headerText = document.getElementById("typing-header");
        const text = "Desvendando o Futuro com Inteligência Artificial";
        let index = 0;

        function type() {
            headerText.textContent = text.slice(0, index);

            if (index < text.length) {
                index++;
                setTimeout(type, 100); // Ajuste a velocidade de digitação conforme desejado
            }
        }

        type();
    }

    // Inicie a animação quando o documento estiver pronto
    document.addEventListener("DOMContentLoaded", startTypingAnimation);

