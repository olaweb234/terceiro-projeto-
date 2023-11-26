let total = 0;
limpar();

function adicionar(){

    let produto = document.getElementById('produto').value;
    let  nomedoproduto =  produto.split('-')[0];
    let valor = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let preco = quantidade * valor;
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML= carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomedoproduto} <span class="texto-azul">R$${preco}</span>
  </section>`;
    total=total + preco;
    let campo =     document.getElementById('valor-total');
    campo.textContent =`R$${total};`   
    document.getElementById('quantidade').value = 0;
}

function limpar(){
    total=0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = '';



}
