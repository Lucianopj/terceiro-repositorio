const botoes = document.querySelectorAll('.botao');
const texto = document.querySelectorAll("aba.conteudo");
for (let i=0; i < botoes.length; i++);
    botoes[i].onclick = function() {

        for(let j=0; j < botoes.length; j++);
            botoes[j].classList.remove("ativo");
            texto[].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        botoes[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = newdate("2024-05-10T23:59:59");
let tempoAtual = new Date();

contadores[0].textcontent = tempoObjetivo1 - Atual;