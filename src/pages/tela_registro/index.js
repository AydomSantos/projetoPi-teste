import "./css/bootstrap.css";

 function PaginaRegistro(){
  return (
    `
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
    <section class="vh-100">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black" style="border-radius: 25px;">
            <div class="card-body p-md-5">
              <div class="row justify-content-center">
                
                <!-- Form Section -->
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Registrar-se</p>

                  <form class="mx-1 mx-md-4">
                    
                    <!-- Name Input -->
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input type="text" id="form3Example1c" class="form-control" required />
                        <label class="form-label" for="form3Example1c">Seu Nome</label>
                      </div>
                    </div>

                    <!-- Email Input -->
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input type="email" id="form3Example3c" class="form-control" required />
                        <label class="form-label" for="form3Example3c">Seu Email</label>
                      </div>
                    </div>

                    <!-- Password Input -->
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input type="password" id="form3Example4c" class="form-control" required />
                        <label class="form-label" for="form3Example4c">Senha</label>
                      </div>
                    </div>

                    <!-- Repeat Password Input -->
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <input type="password" id="form3Example4cd" class="form-control" required />
                        <label class="form-label" for="form3Example4cd">Repita sua senha</label>
                      </div>
                    </div>

                    <!-- Terms of Service Checkbox -->
                    <div class="form-check d-flex justify-content-center mb-5">
                      <input class="form-check-input me-2" type="checkbox" id="form2Example3c" required />
                      <label class="form-check-label" for="form2Example3c">
                        Concordo com todas as declarações em <a href="#!">Termos e Serviços</a>
                      </label>
                    </div>

                    <!-- Register Button -->
                    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="submit" class="btn btn-primary btn-lg">Registrar-se</button>
                    </div>
                  </form>
                </div>

                <!-- Image Section -->
                <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                  <img src="/imagemRegister/undraw_mobile_payments_re_7udl.svg" width="600px">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`
  )
} 

export default PaginaRegistro;