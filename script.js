const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

// Função inteligente
function scrollToElement(elementSelector, instance = 0, offset = 0) {
    const elements = document.querySelectorAll(elementSelector);
    if (elements.length > instance) {
        const element = elements[instance];
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    } else {
        console.warn(`Elemento ${elementSelector} com índice ${instance} não encontrado.`);
    }
}

// A altura da sua navbar (ajuste se precisar!)
const navbarHeight = 80;

link1.addEventListener('click', (event) => {
    event.preventDefault();
    scrollToElement('.how-works', 0, navbarHeight);
});

link2.addEventListener('click', (event) => {
    event.preventDefault();
    scrollToElement('.container-terra', 0, navbarHeight);
});

link3.addEventListener('click', (event) => {
    event.preventDefault();
    scrollToElement('.column', 0, navbarHeight);
});
