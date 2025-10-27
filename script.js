// Programa - Modelo 1
window.document.addEventListener("DOMContentLoaded", function(){
    // Botão: Letra Maiúscula
    window.document.querySelector("#btnMaiuscula").addEventListener("click", function(){
        let inputText = document.querySelector("#input-text").value;
        document.querySelector("#result").innerHTML = inputText.toUpperCase();
    });

    // Botão: Letra Minúscula
    window.document.querySelector("#btnMinuscula").addEventListener("click", function(){
        let inputText = document.querySelector("#input-text").value;
        document.querySelector("#result").innerHTML = inputText.toLowerCase();
    });

    //Botão: Primeira Letra Maiúscula (Capitalização)
    window.document.querySelector("#btnCapitalize").addEventListener("click", function(){
        let inputText = document.querySelector("#input-text").value;
        document.querySelector("#result").innerHTML = inputText.toLowerCase();
        let divisao = inputText.split(". ");

        for (let i = 0; i < divisao.length; i++){
            divisao[i] = divisao[i].charAt(0).toUpperCase() + divisao[i].slice(1);
        }

        document.querySelector("#result").innerHTML = divisao.join(". ");
    });

    // Botão: Limpar campos
    window.document.querySelector("#btnLimpar").addEventListener("click", function(){
        document.querySelector("#input-text").value = "";
        document.querySelector("#result").innerHTML = "";
        document.querySelector("#input-text").focus();
    });

    // Botão-Extra: Inverter o texto
    window.document.querySelector("#btnInverter").addEventListener("click", function(){
        let inputText = document.querySelector("#input-text").value;
        document.querySelector("#result").innerHTML = inputText.split("").reverse().join("")
    });
});