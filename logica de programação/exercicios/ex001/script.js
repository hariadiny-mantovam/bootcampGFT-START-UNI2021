function calcular(){
    let res = document.querySelector('div#res');
    let valores = [5,7,10,3];
    let total = valores.length;
    let soma = 0;
    let media = 0;

    for(let pos in valores){
        soma += valores[pos]
    }

    media = soma/total
    
    res.innerHTML = '';
    res.innerHTML = `A média aritmética do aluno com base em suas notas é de ${media}`
}