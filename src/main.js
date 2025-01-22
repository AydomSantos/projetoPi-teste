import carrinhoPagina from "./pages/carrinho/index";
import registerPagina from "./pages/tela_registro/index";
import faqPagina from "./pages/pagina_faq/index";
import usuarioPagina from "./pages/tela_usuario/index";

// Função para carregar o conteúdo da página e atualizar o histórico
function loadPage(contentFunction, url) {
    const mainElement = document.querySelector("#pagina__home");

    // Verifique se o contentFunction é uma função
    if (typeof contentFunction === 'function') {
        // Exibe o conteúdo carregado no #pagina__home
        mainElement.innerHTML = contentFunction();

        // Atualiza o histórico de navegação
        if (url) {
            history.pushState({ url }, "", url);
        }
    } else {
        console.error("A página não pôde ser carregada.");
    }
}

// Função para lidar com a navegação quando o usuário clica no botão de voltar ou avançar
window.addEventListener("popstate", (event) => {
    const currentUrl = window.location.pathname;
    handleNavigation(currentUrl);
});

// Função para gerenciar a navegação com base na URL
function handleNavigation(url) {
    const pageMapping = {
        "/registro": registerPagina,
        "/faq": faqPagina,
        "/usuario": usuarioPagina,
        "/carrinho": carrinhoPagina,
    };

    const pageFunction = pageMapping[url];
    if (pageFunction) {
        loadPage(pageFunction, url);
    } 
}

document.addEventListener("DOMContentLoaded", () => {
    // Mapeamento dos links de navegação
    const navLinks = {
        "#register-link": { pageFunction: registerPagina, url: "/registro" },
        "#faq-link": { pageFunction: faqPagina, url: "/faq" },
        "#usuario-link": { pageFunction: usuarioPagina, url: "/usuario" },
        "#carrinho-link": { pageFunction: carrinhoPagina, url: "/carrinho" },
    };

    // Adicionar os eventos de clique para cada link de navegação
    Object.entries(navLinks).forEach(([selector, { pageFunction, url }]) => {
        const linkElement = document.querySelector(selector);
        if (linkElement) {
            linkElement.addEventListener("click", function (event) {
                event.preventDefault(); 
                loadPage(pageFunction, url); 
            });
        }
    });

    // Inicializa a navegação com a URL atual
    const currentUrl = window.location.pathname;
    handleNavigation(currentUrl);
});
