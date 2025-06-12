const targetDate = new Date('2025-06-12T23:00:00-04:00').getTime(); // Horário de Manaus (-04:00)

// Obtenha a div onde a contagem regressiva é exibida
const countdownDiv = document.getElementById('countdown');
const containerDiv = document.querySelector('.container'); // Para ajustar o container se necessário

let countdownInterval; // Variável para armazenar o ID do intervalo e poder limpá-lo

function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    // Se a contagem regressiva terminou
    if (difference <= 0) {
        clearInterval(countdownInterval); // Para a atualização do contador
        countdownDiv.innerHTML = '<p class="final-message">Vá para casa! Seu amado(a) lhe espera para comemorarmos juntos o Dia dos Namorados!</p>';
        
        // Opcional: ajustar o estilo da mensagem final para que ela se destaque
        countdownDiv.style.fontSize = '1.5em';
        countdownDiv.style.fontWeight = 'bold';
        countdownDiv.style.color = '#ff4da6'; // Cor rosa forte para a mensagem
        
        // Você pode querer esconder o título ou mudar a cor de fundo do container, por exemplo:
        // document.querySelector('h1').style.display = 'none'; // Esconde o "Vem uma coisa aí..."
        // containerDiv.style.backgroundColor = '#d1ffdb'; // Um verde suave para o final

        return; // Sai da função, não há mais contagem para mostrar
    }

    // Se a contagem regressiva ainda está ativa
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}

// Inicia a contagem regressiva e armazena o ID do intervalo
countdownInterval = setInterval(updateCountdown, 1000);

// Executa uma vez imediatamente para evitar atraso no primeiro segundo
updateCountdown();
