function IMC(){
    console.log("HI!!")
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    const imc = (peso/(altura**2)).toFixed(2)
    var mensagem_de_erro = ('Foram inseridos dados inválidos. Use seu peso e altura.\n')
if (imc > 15 && imc <51){
    if (imc < 18.5){
        document.querySelector("relatorio1").innerHTML = "Classificado como: Abaixo do peso"
        document.querySelector("resultado").innerHTML = "Seu IMC é: " + imc
    }
    else if (imc >= 18.5 && imc < 25){
        document.querySelector("relatorio2").innerHTML = "Classificado como: Peso normal"
        document.querySelector("resultado").innerHTML = "Seu IMC é: " + imc
    }
    else if (imc >= 25 && imc < 30){
        document.querySelector("relatorio3").innerHTML = 'Classificado como: Sobrepeso'
        document.querySelector("resultado").innerHTML = "Seu IMC é: " + imc
    }
    else if (imc >= 30 && imc < 40){
        document.querySelector("relatorio4").innerHTML = 'Classificado como: obesedidade'
        document.querySelector("resultado").innerHTML = "Seu IMC é: " + imc
    }
    else if (imc >= 40 && imc < 50){
        document.querySelector("relatorio5").innerHTML = 'Classificado como: Obesidade grave'
        document.querySelector("resultado").innerHTML = "Seu IMC é: " + imc
    }
}else{
    alert(mensagem_de_erro+"Exemplo: \n\nSe seu peso é 72,35Kg, insira 72.35\nSe sua altura é 1,67m, insira 1.67 .");
    }
}

$("#btn1").click(function() {
				
    swal("Mensagem!");
      
  });