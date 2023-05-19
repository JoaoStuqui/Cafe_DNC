
function abrirmodal(carregarmodal){
    console.log('Carregar a janela modal: ' + carregarmodal)
    let modal = document.getElementById(carregarmodal)

    
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

function fecharmodal(fecharmodal){
    console.log('fechar a janela modal: ' + fecharmodal)
    let modal = document.getElementById(fecharmodal)

    modal.style.display = 'none'
    document.body.style.overflow = 'auto'
}
