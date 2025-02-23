import "./css/style.css";

function faqPagina() {
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
    <div class="container-fluid">
      <!-- Linha -->
      <div class="row">
        <div class="col-xl-12 pa-0">
          <div class="faq-search-wrap bg-teal-light-3">
            <div class="container">
              <h1 class="display-5 text-white mb-20">
                Faça uma pergunta ou navegue por categoria abaixo.
              </h1>
              <div class="form-group w-100 mb-0">
                <div class="input-group">
                  <input
                    class="form-control form-control-lg filled-input bg-white"
                    placeholder="Buscar por palavras-chave"
                    type="text"
                  />
                  <div class="input-group-append">
                    <span class="input-group-text">
                      <span class="feather-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-arrow-right"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline
                            points="12 5 19 12 12 19"
                          ></polyline></svg>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container mt-sm-60 mt-30">
            <div class="hk-row">
              <div class="col-xl-4">
                <div class="card">
                  <h6 class="card-header">Categoria</h6>
                  <ul class="list-group list-group-flush">
                    <li
                      class="list-group-item d-flex align-items-center active"
                    >
                      <i class="ion ion-md-sunny mr-15"></i>Termos &amp;
                      condições<span class="badge badge-light badge-pill ml-15"
                        >06</span
                      >
                    </li>
                    <li class="list-group-item d-flex align-items-center">
                      <i class="ion ion-md-unlock mr-15"></i>Política de privacidade<span
                        class="badge badge-light badge-pill ml-15"
                        >14</span
                      >
                    </li>
                    <li class="list-group-item d-flex align-items-center">
                      <i class="ion ion-md-bookmark mr-15"></i>Termos de uso<span
                        class="badge badge-light badge-pill ml-15"
                        >10</span
                      >
                    </li>
                    <li class="list-group-item d-flex align-items-center">
                      <i class="ion ion-md-filing mr-15"></i>Documentação<span
                        class="badge badge-light badge-pill ml-15"
                        >27</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-8">
                <div class="card card-lg">
                  <h3 class="card-header border-bottom-0">
                    Termos e Condições
                  </h3>
                  <div
                    class="accordion accordion-type-2 accordion-flush"
                    id="accordion_2"
                  >
                    <div class="card">
                      <div
                        class="card-header d-flex justify-content-between activestate"
                      >
                        <a
                          role="button"
                          data-toggle="collapse"
                          href="#collapse_1i"
                          aria-expanded="true"
                          >Propriedade Intelectual</a
                        >
                      </div>
                      <div
                        id="collapse_1i"
                        class="collapse show"
                        data-parent="#accordion_2"
                        role="tabpanel"
                      >
                        <div class="card-body pa-15">
                          A divulgação da Propriedade Intelectual informará aos
                          usuários que os conteúdos, logotipo e outros meios visuais
                          que você criou são sua propriedade e estão protegidos por
                          leis de direitos autorais.
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header d-flex justify-content-between">
                        <a
                          class="collapsed"
                          role="button"
                          data-toggle="collapse"
                          href="#collapse_2i"
                          aria-expanded="false"
                          >Cláusula de Rescisão</a
                        >
                      </div>
                      <div
                        id="collapse_2i"
                        class="collapse"
                        data-parent="#accordion_2"
                      >
                        <div class="card-body pa-15">
                          Uma cláusula de rescisão informará que as contas dos
                          usuários em seu site e aplicativo móvel, ou o acesso dos
                          usuários ao seu site e aplicativo móvel (caso os usuários
                          não possam ter uma conta), podem ser encerradas em caso de
                          abusos ou a seu exclusivo critério.
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header d-flex justify-content-between">
                        <a
                          class="collapsed"
                          role="button"
                          data-toggle="collapse"
                          href="#collapse_3i"
                          aria-expanded="false"
                          >Lei Aplicável</a
                        >
                      </div>
                      <div
                        id="collapse_3i"
                        class="collapse"
                        data-parent="#accordion_2"
                      >
                        <div class="card-body pa-15">
                          Uma Lei Aplicável informará aos usuários quais leis regem
                          o contrato. Isso deve indicar o país em que sua empresa está
                          sediada ou o país de onde você opera seu site e aplicativo
                          móvel.
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header d-flex justify-content-between">
                        <a
                          class="collapsed"
                          role="button"
                          data-toggle="collapse"
                          href="#collapse_4i"
                          aria-expanded="false"
                          >Limitação do que os usuários podem fazer</a
                        >
                      </div>
                      <div
                        id="collapse_4i"
                        class="collapse"
                        data-parent="#accordion_2"
                      >
                        <div class="card-body pa-15">
                          Uma cláusula de Limitação do que os Usuários Podem Fazer
                          pode informar aos usuários que, ao concordarem em usar seu
                          serviço, eles também estão concordando em não fazer certas
                          coisas. Isso pode ser parte de uma lista longa e detalhada
                          em seus Termos e Condições, de modo a abranger o maior número
                          possível de usos negativos.
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header d-flex justify-content-between">
                        <a
                          class="collapsed"
                          role="button"
                          data-toggle="collapse"
                          href="#collapse_5i"
                          aria-expanded="false"
                          >Limitação de responsabilidade pelos seus produtos</a
                        >
                      </div>
                      <div
                        id="collapse_5i"
                        class="collapse"
                        data-parent="#accordion_2"
                      >
                        <div class="card-body pa-15">
                          Não importa que tipo de produtos você venda, as melhores
                          práticas orientam que você apresente quaisquer garantias que
                          esteja isentando e responsabilidades que esteja limitando de
                          maneira que seus clientes percebam.
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header d-flex justify-content-between">
                        <a
                          class="collapsed"
                          role="button"
                          data-toggle="collapse"
                          href="#collapse_6i"
                          aria-expanded="false"
                          >Como aplicar os Termos e Condições</a
                        >
                      </div>
                      <div
                        id="collapse_6i"
                        class="collapse"
                        data-parent="#accordion_2"
                      >
                        <div class="card-body pa-15">
                          Embora criar e ter Termos e Condições seja importante, é
                          muito mais importante entender como você pode torná-los
                          aplicáveis. Você deve sempre usar o clickwrap para fazer com
                          que os usuários concordem com seus Termos e Condições. O
                          clickwrap é quando você faz os usuários tomarem alguma ação –
                          normalmente clicando em algo – para mostrar que eles estão
                          concordando. Aqui está como o Engine Yard usa o acordo
                          clickwrap com a caixa de seleção "Eu concordo":
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Linha -->
    </div>
  
        `;
}

export default faqPagina;
