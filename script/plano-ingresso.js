let quantidade;
let preco;
let planoSelecionado;

/* ESCOLHER OS INGRESSOS E IR PARA A "FINALIZAR COMPRA*/
function selecionar(plan) {
    const compra_ingressos = document.querySelector('.tela1')
    const finalizar_compra = document.querySelector('.tela2')
    compra_ingressos.classList.add('desabilitado')
    finalizar_compra.classList.remove('desabilitado')  
    finalizar_compra.innerHTML = 
    `<header>
        <h1>Finalizar Compra</h1>
        <form action="" method="post">
            <fieldset>
                <legend>Pedido</legend>
                <div class="ingresso">
                    <p>Você selecionou o <strong>PACOTE ${plan}</strong></p>
                </div>
            <div>
                <label for="ipagamento">Selecione o meio de pagamento</label>
                <select name="pagamento" id="ipagamento" required>
                    <option value="Pix">Pix</option>
                    <option value="Cartao">Cartão de Crédito/Débito</option>
                    <option value="Transferencia">Transferência</option>
                </select>
            </div>
            <div>
                <label for="iqtd">Selecione a quantidade de Ingressos:</label>
                <input type="number" name="qtd" id="iqtd" min="1" max="4" required class = 'qtd_ingressos'>
            </div>
            <div>
                <p>Valor da Compra: <span onchange="mudar()" class="valor"></span></p>
            </div>
            <button><a href = 'formulariopessoal.html'>Avançar</a></button>
            <button class='voltar'>Voltar</button>
        </fieldset>         
    </form>
</header>`

quantidade = document.querySelector('#iqtd'); // INPUT
preco = document.querySelector('.valor');      //  DIV
planoSelecionado = plan;
quantidade.addEventListener('change', mudar);

var btn = document.querySelector(".voltar");
btn.addEventListener("click", function() {
    location.reload();

    })
}