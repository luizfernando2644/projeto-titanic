function clicar() {
    const formulario = document.querySelector('.tela3')
    const confirmacao = document.querySelector('.tela4')
    formulario.classList.add('desabilitado')
    confirmacao.classList.remove('desabilitado')
    confirmacao.innerHTML = 
    `
    <div class="confirmacao">
        <h1>Deseja confirmar sua compra?</h1>
        <button class="botao" onclick="clicou('SIM')">SIM</button>
        <button class="botao" onclick="clicou('NÃO')">NÃO</button>
    </div>
    `
}

function clicou(opcao) {
    const formulario = document.querySelector('.tela3')
    const confirmacao = document.querySelector('.tela4')
    const agradecimento = document.querySelector('.tela5')
    if (opcao == 'SIM') {
        formulario.classList.add('desabilitado')
        confirmacao.classList.add('desabilitado')
        agradecimento.classList.remove('desabilitado')
        agradecimento.innerHTML = 
        `
        <div class = "agradecimento">
            <h1>Agradecemos a sua compra!</h1>
            <p>Esperamos que faça bom proveito do seu passeio!</p>
        </div>
        `
    } else {
        formulario.classList.remove('desabilitado')
        confirmacao.classList.add('desabilitado')
        agradecimento.classList.add('desabilitado')
    }
}