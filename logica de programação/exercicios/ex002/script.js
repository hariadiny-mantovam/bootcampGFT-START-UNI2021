function verificar(){
    let mes1 = Number(document.querySelector('input#mes1').value);
    let mes2 = Number(document.querySelector('input#mes2').value);
    let mes3 = Number(document.querySelector('input#mes3').value);
    let mes4 = Number(document.querySelector('input#mes4').value);
    let res = document. querySelector('div#res');

    let total = mes1 + mes2 + mes3 + mes4;
    let media = total/4;

    Math.round(total);
    Math.round(media);
    total.toFixed(2)
    media.toFixed(2)

    res.innerHTML = `O total de vendas foi ${total} e a média obtida das vendas foi de ${media}`

    if(media < 500){
        res.innerHTML += '<p>As vendas foram fracas!</p>'
    } else if (media < 5000){
        res.innerHTML += '<p>As vendas foram medianas!</p>'
    } else {
        res.innerHTML += '<p>As vendas foram excelentes!</p>'
    }
    
}