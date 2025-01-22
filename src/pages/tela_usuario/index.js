import "./css/stytle.css";
function usuarioPagina() {
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
  <div class="header">
    <span class="header__logo">Logo</span>
    <nav class="nav">
      <a href="#" class="nav__btn--account">
        <i class="fa-solid fa-user"></i> Minha Conta
      </a>
      <a href="#" class="nav__btn--logout">Sair</a>
    </nav>
  </div>

  <div class="aside">
    <ul class="aside__menu">
      <li class="aside__menu__item">
        <a href="#" class="aside__menu__link">
          <i class="fa-solid fa-chart-line"></i> Dashboard
        </a>
      </li>
      <li class="aside__menu__item">
        <a href="#" class="aside__menu__link">
          <i class="fa-solid fa-headset"></i> Suporte
        </a>
      </li>
      <li class="aside__menu__item">
        <a href="#" class="aside__menu__link">
          <i class="fa-solid fa-newspaper"></i> Novidades
        </a>
      </li>
      <li class="aside__menu__item">
        <a href="#" class="aside__menu__link">
          <i class="fa-solid fa-tag"></i> Promoções
        </a>
      </li>
      <li class="aside__menu__item active">
        <a href="#" class="aside__menu__link">
          <i class="fa-solid fa-user"></i> Perfil
        </a>
      </li>
      <li class="aside__menu__item">
        <a href="#" class="aside__menu__link">
          <i class="fa-solid fa-gear"></i> Configurações
        </a>
      </li>
    </ul>
  </div>

  <main class="main">
    <section class="main__section">
      <h2>Seja bem-vindo(a) ao seu perfil</h2>
      <p>Aqui você pode editar suas informações pessoais, visualizar seu histórico de compras, favoritos e muito mais.</p>

      <h3>Editar Perfil</h3>
      <form action="#" method="post" class="form">
        <div class="form__group">
          <label for="name">Nome Completo:</label>
          <input type="text" id="name" name="name" placeholder="Digite seu nome completo" required>
        </div>
        <div class="form__group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Digite seu email" required>
        </div>
        <div class="form__group">
          <label for="password">Senha:</label>
          <input type="password" id="password" name="password" placeholder="Digite sua senha" required>
        </div>
        <div class="form__group">
          <label for="passwordConfirm">Confirmar Senha:</label>
          <input type="password" id="passwordConfirm" name="passwordConfirm" placeholder="Confirme sua senha" required>
        </div>
        <div class="form__group">
          <label for="phone">Telefone:</label>
          <input type="tel" id="phone" name="phone" placeholder="(XX) XXXX-XXXX">
        </div>
        <div class="form__group">
          <label for="address">Endereço:</label>
          <input type="text" id="address" name="address" placeholder="Digite seu endereço">
        </div>
        <div class="form__group form__group--buttons">
          <button type="submit" class="btn--save">Salvar Alterações</button>
          <button type="reset" class="btn--reset">Cancelar</button>
        </div>
      </form>

      <h3>Histórico de Compras</h3>
      <p>Aqui você pode visualizar suas compras anteriores.</p>
      
      <!-- Verifica se há compras -->
      <ul class="purchase-history">
        <!-- Se não houver compras, exibe uma mensagem -->
        <li class="purchase-item no-purchases">
          <span class="purchase-item__message">Sem compras realizadas até o momento.</span>
        </li>
        <!-- Se houver compras, elas seriam listadas aqui -->
        <!-- Exemplo: -->
        <!-- <li class="purchase-item">
          <span class="purchase-item__date">10/11/2024</span>
          <span class="purchase-item__details">Produto A - R$ 100,00</span>
        </li> -->
      </ul>

      <h3>Favoritos</h3>
      <p>Confira seus produtos favoritos abaixo:</p>
      <!-- Exemplo de lista de favoritos -->
      <ul class="favorites-list">
        <li class="favorite-item">
          <span class="favorite-item__name">Iphone 7</span>
          <span class="favorite-item__price"></span>
        </li>
        <li class="favorite-item">
          <span class="favorite-item__name">Fogão</span>
          <span class="favorite-item__price"></span>
        </li>
      </ul>
    </section>
  </main>

  <footer class="footer">
    <p>&copy; 2024 PROJETO P.I. SENAC 2024.3.155 Todos os direitos reservados.</p>
  </footer>

    `;
}

export default usuarioPagina;