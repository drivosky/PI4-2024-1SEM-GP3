
// Deixando o botão do menu clicavél quando está responsivo
const toggleBtn = document.getElementsByClassName("toggle-btn")[0];
const navmenu = document.getElementsByClassName("nav-menu")[0];

toggleBtn.addEventListener("click", () => {
    navmenu.classList.toggle("active");
});

