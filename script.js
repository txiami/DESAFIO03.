
function aprovado(){
    const inputNota = document.getElementById("inputNota").value
    let aproximar = (inputNota % 5) >= 3 ? true : false
    let aproximada = (aproximar == true) ? 'Sua nota aproximada foi: ' : 'Sua nota aproximação foi: '
    let notaFinal = (inputNota - (inputNota % 5)) + 5
    notaFinal = aproximar == true ? notaFinal : inputNota

    if(inputNota < 38 ){
        alert('Você foi reprovado sem direito a aproximação e sua nota foi: ' + inputNota)
    }else{
            alert('Você foi aprovado e sua nota ' + aproximada + notaFinal)
        }
}
