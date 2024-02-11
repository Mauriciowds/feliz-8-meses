<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contagem Regressiva de Namoro</title>
    <style>
        /* Estilos CSS para o contador e a data */
        #countdown, #current-date {
            font-size: 18px;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <div>
        <p id="countdown"></p>
        <p id="current-date"></p>
    </div>

    <script>
        // Data de comemoração dos 8 meses de namoro (12 de fevereiro de 2024)
        const anniversaryDate = new Date('2024-02-12');

        // Função para atualizar o contador
        function updateCountdown() {
            const currentDate = new Date();
            const timeDifference = anniversaryDate - currentDate;

            if (timeDifference > 0) {
                // Calcular dias, horas, minutos e segundos restantes
                const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

                // Exibir o contador atualizado
                document.getElementById('countdown').innerText = `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
            } else {
                // Quando atingir a data de comemoração
                document.getElementById('countdown').innerText = 'Hoje é o nosso 8º mês de namoro! Parabéns!';
                // Adicione aqui sua comemoração especial
            }
        }

        // Atualizar o contador a cada segundo
        setInterval(updateCountdown, 1000);

        // Exibir a data atual
        document.getElementById('current-date').innerText = new Date().toLocaleDateString('pt-BR');
    </script>
</body>
</html>
