var biblioteca = [
  "computador",
  "brinquedo",
  "corda",
  "prego",
  "carro",
  "fone",
  "galinha",
  "homem",
  "jogo",
  "bolinha",
  "farinha",
];
var qtde = biblioteca.length - 1;
var pos = Math.round(Math.random() * qtde);
var palavra = biblioteca[pos];
var tam = palavra.length;
var acertos;
var errosMax = 7;
var erros;
var desenhos = [];
var acertou = false;
var jogando = false;
var obj;
var jog;

function defineLetra(l) {
  for (var i = 0; i < 11; i++) {
    obj = document.getElementById("letra" + i).value = "";
    obj = document.getElementById("letra" + i).style.sisplay = "none";
  }
  for (var i = 0; i < l; i++) {
    obj = document.getElementById("letra" + i).style.display = "inline-block";
  }
}

function jogar() {
  jog = document.getElementById("letraj");
  jog.focus();
  if (jog.value == "") {
    alert("Digite uma letra");
  } else {
    if (jogando) {
      var letraTmp;
      var letra;
      var pesq;
      letra = jog.value;
      jog.value = "";
      pesq = palavra.match(letra);
      acertou = false;
      while (pesq != null) {
        letraTmp = palavra.search(letra);
        obj = document.getElementById("letra" + letraTmp).value = letra;
        palavra = palavra.replace(letra, "0");
        acertos++;
        pesq = palavra.match(letra);
        acertou = true;
      }
      if (!acertou) {
        document.getElementById(
          "letradigitada"
        ).innerHTML += letra.toUpperCase();
        erros++;
        if (erros < 7) {
          desenhos[erros].style.display = "block";
        } else {
          document.getElementById("cabeca").src = "Imagens/cabeca2.png";
          document.getElementById("msg").innerHTML = "PERDEU!!!!";
          jogando = false;
        }
      }
      if (acertos === tam) {
        //document.getElementById("msg").innerHTML=""
        document.getElementById("msg").innerHTML = "GANHOU!!!";
        jogando = false;
      }
    }
  }
}
function inicia() {
  jogando = true;
  jog = document.getElementById("letraj");
  jog.value = "";
  jog.focus();
  acertos = 0;
  erros = 0;
  acertou = false;
  document.getElementById("letradigitada").innerHTML = "Letras Digitadas:";
  pos = Math.round(Math.random() * qtde);
  palavra = biblioteca[pos];
  tam = palavra.length;
  defineLetra(tam);
  document.getElementById("msg").innerHTML = "";
  desenhos[1] = document.getElementById("cabeca");
  desenhos[2] = document.getElementById("corpo");
  desenhos[3] = document.getElementById("bracoD");
  desenhos[4] = document.getElementById("bracoE");
  desenhos[5] = document.getElementById("pernaD");
  desenhos[6] = document.getElementById("pernaE");
  document.getElementById("cabeca").src = "Imagens/cabeca1.png";
  for (var i = 1; i < 7; i++) {
    desenhos[i].style.display = "none";
  }
}
window.addEventListener("load", inicia);
