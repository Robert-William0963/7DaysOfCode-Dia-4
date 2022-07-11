const valor_random = Math.floor(Math.random() * (10 - 0 + 1) + 0);

console.log(valor_random)

const submit = document.querySelector('.botao-subtmit');

const acertou = false;


function confere (chute, random) {
    
       if(chute == random) {
            alert('Parabéns, você acertou!')
            acertou = true;
        } 
        if(chute > random) {
            alert(`O número que estou pensando é menor que ${chute} \nTente novamente!`)
        } 
        if(chute < random) {
            alert(`O número que estou pensando é maior que ${chute} \nTente novamente!`)
        }

        return acertou;
}

submit.onclick = function() {

    for(i = 1; i<3; i++) {
        const valor_chute = document.querySelector('.input-valor');

        if (valor_chute.value == '' || valor_chute.value > 10 || valor_chute.value < 0) {
            alert('Número digitado inválido ou campo em branco');
            break;
        }
    
        const resul = confere(valor_chute.value, valor_random);

        if(resul = true) {
            break;
        }

        if(i = 3) {
            alert('Número de tentativas excedidas!')
            break;
        }
    }
    
}