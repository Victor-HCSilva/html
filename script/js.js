// Supondo que você tenha inputs com id="peso" e id="altura" no seu HTML
// e um elemento com id="resultado-imc" para mostrar a mensagem.

function calcularEExibirIMC() {
    // Pega os valores dos inputs (substitua pelos seus seletores reais)
    const inputPeso = document.getElementById("peso");
    const inputAltura = document.getElementById("altura");
    const labelResultado = document.getElementById("resultado"); // Corrigido seletor

    if (!inputPeso || !inputAltura || !labelResultado) {
        console.error("Elementos de input ou resultado não encontrados no HTML!");
        if (labelResultado) labelResultado.innerHTML = "Erro de configuração da página.";
        return;
    }

    const peso = parseFloat(inputPeso.value);
    const altura = parseFloat(inputAltura.value); // Assumindo altura em metros (ex: 1.75)

    const mensagem_de_erro_input = 'Dados inválidos. Insira seu peso (kg) e altura (m) como números positivos.';

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        labelResultado.innerHTML = mensagem_de_erro_input;
        labelResultado.style.color = "red"; // Opcional: destacar erro
        return;
    }
    if (altura > 3) { // Altura em metros, improvável ser maior que 3m
        labelResultado.innerHTML = "Altura improvável. Verifique se está em metros (ex: 1.75) e não em centímetros.";
        labelResultado.style.color = "red";
        return;
    }


    const imcNumerico = peso / (altura ** 2);
    const resultado_imc_formatado = imcNumerico.toFixed(2); // String para exibição

    function obterMensagemIMC(imcValor) { // imcValor deve ser um número
        const prefixo = `Seu IMC é ${resultado_imc_formatado}.<br>Classificado como: `;

        const categorias = {
            muito_abaixo: "magreza grave (abaixo do peso).",
            abaixo: "abaixo do peso.",
            normal: "peso normal.",
            sobrepeso: "sobrepeso.",
            obesidade_I: "obesidade grau I.",
            obesidade_II: "obesidade grau II (severa).",
            obesidade_III: "obesidade grau III (mórbida)."
        };

        if (imcValor < 16) return prefixo + categorias.muito_abaixo;
        if (imcValor < 18.5) return prefixo + categorias.abaixo;
        if (imcValor < 25) return prefixo + categorias.normal;
        if (imcValor < 30) return prefixo + categorias.sobrepeso;
        if (imcValor < 35) return prefixo + categorias.obesidade_I;
        if (imcValor < 40) return prefixo + categorias.obesidade_II;
        return prefixo + categorias.obesidade_III; // imcValor >= 40
    }

    const mensagemFinal = obterMensagemIMC(imcNumerico); // Passa o IMC numérico para a lógica
    labelResultado.innerHTML = mensagemFinal;
    labelResultado.style.color = "black"; // Resetar cor caso tenha sido erro antes
}

