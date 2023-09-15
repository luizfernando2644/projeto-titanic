function mudar() {
    if (planoSelecionado === 'BÁSICO') {
        if (quantidade.value != '') {
            preco.innerHTML = `R$${1000 * quantidade.value},00 reais`;
            preco.style.fontWeight = 'bold'
            preco.style.padding = '10px'
        } else {
            preco.style.display = 'none';
        }
    }
    else if (planoSelecionado === 'MÉDIO') {
        if (quantidade.value != '') {
            preco.innerHTML = `R$${1500 * quantidade.value},00 reais`;
            preco.style.fontWeight = 'bold'
            preco.style.padding = '10px'
        } else {
            preco.style.display = 'none';
        }
    }
    else {
        if (quantidade.value != '') {
            preco.innerHTML = `R$${2000 * quantidade.value},00 reais`;
            preco.style.fontWeight = 'bold'
            preco.style.padding = '10px'
        } else {
            preco.style.display = 'none';
        }
    }
}