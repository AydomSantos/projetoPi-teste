// Importar o CSS
import "./css/style.css";

// Definir a função para renderizar a página do carrinho
function carrinhoPagina() {
    return `
     <header class="header">
      <span class="header__logo">Logo</span>
      <nav class="nav">
        <a href="#" class="nav__btn--login" id="login-link">Login</a>
        <a href="#" class="nav__btn--register" id="register-link">Register</a>
        <a href="#" class="nav__btn--faq" id="faq-link">FAQ</a>
        <a href="#" class="nav__btn--usuario" id="usuario-link">Usuário</a>
        <a href="#" class="nav__btn--carrinho" id="usuario-carrinho">Carrinho de Compras</a>
      </nav>
    </header>

        <!-- Conteúdo Principal -->
        <main class="conteudo-principal container d-flex justify-content-center align-items-center">
            <!-- Card contendo o conteúdo -->
            <div class="card p-3 p-md-4">
                <div class="grafismo-azul"></div>

                <!-- Container para imagem e formulário lado a lado -->
                <div class="row">
                    <!-- Coluna de imagem -->
                    <div class="col-md-6 mb-3 mb-md-0">
                        <section class="imagem-carrinho">
                            <img src="imagemCategoria/51dfg52K-cL._AC_SX679_.jpg" alt="Imagem de um carrinho de compras cinza" class="img-fluid" style="width: 30%;">
                            <img src="imagenHome/produtos/celulares/A55.jpg" alt="Imagem de um carrinho de compras cinza" class="img-fluid" style="width: 30%;">
                        </section>
                    </div>

                    <section class="carrinho col-md-6">
                        <div class="titulo-wrapper">
                            <h2 class="carrinho__titulo mb-3">Produtos no carrinho</h2>
                        </div>

                        <section class="carrinho__produtos" id="lista-produtos">
                            <section class="carrinho__produtos__produto">
                                <span class="texto-azul">1x</span> Celular <span class="texto-azul">R$1400</span>
                            </section>
                        </section>

                        <div class="divisoria"></div>

                        <p class="carrinho__total">
                            Total: <span class="texto-azul" id="valor-total">R$0,00</span>
                        </p>
                    </section>

                    <!-- Coluna de formulário -->
                    <div class="col-md-6">
                        <section class="adicionar-produto">
                            <h1 class="titulo" style="margin: 2rem 0;">
                                Carrinho de <span class="texto-azul">compras</span>
                            </h1>

                            <form class="formulario row g-3">
                                <div class="col-12 col-md-6">
                                    <label class="campo-grupo">
                                        <span class="texto-medio-azul">Produto</span>
                                        <select class="form-select produto-input" name="produto" id="produto">
                                            <option value="Samsung A15 - R$1100">Samsung A15 - R$1100</option>
                                            <option value="Edge50 - R$1400">Motorola Edge50 - R$1400</option>
                                        </select>
                                    </label>
                                </div>

                                <div class="parte-inferior d-flex gap-3">
                                    <div class="col-6">
                                        <label class="campo-grupo">
                                            <span class="texto-medio-azul">Qtde.</span>
                                            <input class="form-control quantidade-input" id="quantidade" type="number" placeholder="100" value="1">
                                        </label>
                                    </div>

                                    <div class="botoes-wrapper">
                                        <button type="button" class="btn btn-primary botao-adicionar">Adicionar</button>
                                        <button type="button" class="btn btn-dark botao-limpar">Limpar</button>
                                    </div>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </main>
        
    `;
}

// Exportar a função
export default carrinhoPagina;


// Funções para adicionar produtos e limpar o carrinho
function addProdutos() {
    const produtos = document.getElementById("produto").value;
    const qtdProdutos = parseInt(document.getElementById("quantidade").value);

    const [product, price] = produtos.split(" - R$");
    const priceNumber = parseFloat(price);

    if (isNaN(priceNumber) || isNaN(qtdProdutos) || qtdProdutos <= 0) {
        alert("Preço ou quantidade inválida");
        return;
    }

    const carrinho = `
        <section class="carrinho__produtos__produto">
            <span class="texto-azul">${qtdProdutos}x</span> ${product} <span class="texto-azul">R$${(
            priceNumber * qtdProdutos
        )
            .toFixed(2)
            .replace(".", ",")}</span>
        </section>
    `;

    document.getElementById("lista-produtos").innerHTML += carrinho;

    somaValor(priceNumber * qtdProdutos);
}

function somaValor(valor) {
    const totalElement = document.getElementById("valor-total");
    const totalAtual = parseFloat(
        totalElement.innerText.replace("R$", "").replace(",", ".")
    );

    const novoTotal = (isNaN(totalAtual) ? 0 : totalAtual) + valor;
    totalElement.innerText = `R$${novoTotal.toFixed(2).replace(".", ",")}`;
}

function limpar() {
    document.getElementById("lista-produtos").innerHTML = "";
    document.getElementById("valor-total").innerHTML = "R$0,00";
}
