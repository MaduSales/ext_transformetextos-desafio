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
    
    inputText = inputText.toLowerCase();
    let result = "";
    let divisao = true;

    for (let i = 0; i < inputText.length; i++) {
        let char = inputText[i];
        
        if (divisao && char >= 'a' && char <= 'z') {
            result += char.toUpperCase();
            divisao = false;
        } 
        else {
            result += char;
            if (char == '.' || char == '?' || char == '!') {
                divisao = true;
            }
        }
    }
    
    document.querySelector("#result").innerHTML = result;
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